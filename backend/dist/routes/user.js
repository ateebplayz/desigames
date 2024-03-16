"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const mongo_1 = require("../modules/mongo");
const f_1 = require("../modules/f");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 24 * 60 * 60 * 1000,
    max: 5,
    message: { error: 'Too many requests from this IP, please try again later.', code: 429 }
});
router.use(limiter);
router.get('/authenticate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.username || body.username == null || body.username == 'null') {
        return res.json({ error: 'No username provided', code: 400 });
    }
    if (!body.password || body.password == null || body.password == 'null') {
        return res.json({ error: 'No password provided', code: 400 });
    }
    if (body.password.length < 8) {
        return res.json({ error: 'Password must be greater than 8 characters.', code: 400 });
    }
    if (body.username.length < 3) {
        return res.json({ error: 'Username must be greater than 3 characters.', code: 400 });
    }
    const userFinder = yield mongo_1.collections.user.findOne({ username: body.username });
    if (userFinder) {
        return res.json({ error: 'A user with this username already exists. Try another.', code: 409 });
    }
    let backupCodes = [];
    for (let i = 0; i < 10; i++) {
        backupCodes.push({ code: (0, f_1.generateKey)(), used: false });
    }
    const user = {
        username: body.username,
        password: (0, f_1.encryptData)(body.password),
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
    };
    mongo_1.collections.user.insertOne(user);
    const token = jsonwebtoken_1.default.sign(user, process.env.JWTSECRET || '');
    return res.json({ token: token, code: 200 });
}));
exports.default = router;
