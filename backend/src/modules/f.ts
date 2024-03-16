import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

export function generateKey() {
  const bytes = crypto.randomBytes(12)
  const hex = bytes.toString('hex')
  const formattedHex = hex.replace(/(.{4})/g, '$1-')
  return formattedHex.slice(0, -1)
}
export function encryptData(data: string) {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.JWTSECRET || ''), iv)
  let encryptedData = cipher.update(data, 'utf8', 'hex')
  encryptedData += cipher.final('hex')
  return { encryptedData, iv: iv.toString('hex') }
}