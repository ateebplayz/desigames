"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptData = exports.generateKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateKey() {
    const bytes = crypto_1.default.randomBytes(12);
    const hex = bytes.toString('hex');
    const formattedHex = hex.replace(/(.{4})/g, '$1-');
    return formattedHex.slice(0, -1);
}
exports.generateKey = generateKey;
function encryptData(data) {
    const iv = crypto_1.default.randomBytes(16);
    const cipher = crypto_1.default.createCipheriv('aes-256-cbc', Buffer.from(process.env.JWTSECRET || ''), iv);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return { encryptedData, iv: iv.toString('hex') };
}
exports.encryptData = encryptData;
