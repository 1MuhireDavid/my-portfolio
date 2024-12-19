import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "MuhirePortfolio",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err: unknown) {
    console.log("Error: ", err);
    if (err instanceof Error) {
      return new NextResponse("Error: " + err.message, { status: 400 });
    }
  }
};

export default connect;
