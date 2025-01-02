import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    throw new Error("Failed to connect to mongoDB");
  }
};

export default connectDB;
