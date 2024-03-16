import express from 'express'
import rateLimit from 'express-rate-limit'
import { collections } from '../modules/mongo'
import { encryptData, generateKey } from '../modules/f'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, 
    max: 5,
    message: { error: 'Too many requests from this IP, please try again later.', code: 429 }
})
router.use(limiter)
router.get('/authenticate', async (req, res) => {

})
router.post('/create', async (req, res) => {
    const body = req.body as {username: string, password: string}
    if(!body.username || body.username == null || body.username == 'null') {
        return res.json({error: 'No username provided', code: 400})
    }
    if(!body.password || body.password == null || body.password == 'null') {
        return res.json({error: 'No password provided', code: 400})
    }
    if(body.password.length < 8) {
        return res.json({error: 'Password must be greater than 8 characters.', code: 400})
    }
    if(body.username.length < 3) {
        return res.json({error: 'Username must be greater than 3 characters.', code: 400})
    }
    const userFinder = await collections.user.findOne({username: body.username})
    if(userFinder) {
        return res.json({error: 'A user with this username already exists. Try another.', code: 409})
    }
    let backupCodes: Array<BackupCode> = []

    for(let i = 0; i < 10; i++) {
        backupCodes.push({code: generateKey(), used: false})
    }
    const user = {
        username: body.username,
        password: encryptData(body.password),
        backupCodes: backupCodes,
        socials: {
            discord: 'N/A',
            instagram: 'N/A',
            facebook: 'N/A',
            phone: 'N/A',
            email: 'N/A',
            whatsapp: 'N/A',
            snapchat: 'N/A',
            x: 'N/A',
            github: 'N/A'
        },
        loginAttempts: []
    }
    collections.user.insertOne(user)
    const token = jwt.sign(user, process.env.JWTSECRET || '')
    return res.json({token: token, code: 200})
})

export default router