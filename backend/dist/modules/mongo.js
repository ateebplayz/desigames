"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collections = exports.mongoDb = exports.mongoClient = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.mongoClient = new mongodb_1.MongoClient(process.env.MONGOURI || '');
exports.mongoDb = exports.mongoClient.db('Desigames');
exports.collections = {
    user: exports.mongoDb.collection('Users')
};
