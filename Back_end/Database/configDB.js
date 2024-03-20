import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoDbConnection = process.env.MONGO_CONNECTION_URL;
const client = new MongoClient(mongoDbConnection);
export default client;
