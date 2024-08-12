import mongoose from "mongoose";
import { DB_URI } from "./configs.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Db connected successfully ${DB_URI}`);
  } catch (error) {
    console.log("error in db connection",error.message);
  }
};