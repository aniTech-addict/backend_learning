import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI) throw new Error('DB_URI is not defined');


async function connectDb(){
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }    
}

export default connectDb;