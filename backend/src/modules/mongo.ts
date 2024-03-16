import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export const mongoClient = new MongoClient(process.env.MONGOURI || '')

export const mongoDb = mongoClient.db('Desigames')

export const collections = {
    user: mongoDb.collection<User>('Users')
}