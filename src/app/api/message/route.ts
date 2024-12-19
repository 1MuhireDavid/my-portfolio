import connect from "@/app/lib/db"
import Message from "@/app/lib/models/message";
import { NextResponse } from "next/server";


export const GET = async() => {
    try {
        await connect();
        const messages = await Message.find()
        return new NextResponse(JSON.stringify(messages), {status: 200})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return new NextResponse("Error in fetching messages: " + error.message, { status: 400 });
          }
          // Handle cases where error is not of type Error
          return new NextResponse("An unknown error occurred.", { status: 400 });
    }
}

export const POST = async(request: Request) => {
    try {
        await connect();
        const body = await request.json();
        const newMessage = new Message(body)
        await newMessage.save();
        return new NextResponse("Message Sent successfully", {status: 200})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return new NextResponse("Error in fetching messages: " + error.message, { status: 400 });
          }
    }
}