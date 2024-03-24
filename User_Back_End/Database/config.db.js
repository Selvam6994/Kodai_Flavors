import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionURL = process.env.MONGO_CONNECTION_URL;

const client = new MongoClient(connectionURL);

export default client