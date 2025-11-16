import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI) throw new Error('DB_URI is not defined');


async function connectDb(){
    try {
        const conn = await mongoose.connect(DB_URI);
        
        mongoose.connection.on('connected', () => {
            console.log(`MongoDB connected: ${conn.connection.host}`);
        });
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });
    } catch (error) {
        console.log("Error connecting to db",err )
    }
}

export default connectDb;