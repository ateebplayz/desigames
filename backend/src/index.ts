import express from 'express'
import userRoute from './routes/user'
import cors from 'cors'
import { mongoClient } from './modules/mongo'

mongoClient.connect().then(()=>{
    console.log('Connected to mongodb')
}).catch(console.error)

const app = express()
app.use(cors())
app.use('/api/user', userRoute)
app.listen(8080, () => {
    console.log('App listening on port 8080')
})