import connect from "@/app/lib/db"
import User from "@/app/lib/models/user";
import { NextResponse } from "next/server"

// const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async() => {

    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (error: unknown) {
        if (error instanceof Error) {
            return new NextResponse("Error in fetching users: " + error.message, { status: 400 });
          }
    }
}