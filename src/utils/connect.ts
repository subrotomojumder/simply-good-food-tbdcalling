import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("connect db amar");
  } catch (error) {
    console.log("mongodb connection error from connect file", error);
  }
}
