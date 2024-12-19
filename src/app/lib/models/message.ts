import { Schema, model, models} from "mongoose"

const messageSchema = new Schema({
    email: {type: "string"},
    subject: {type: "string",},
    desc: {type: "string"}
},{timestamps:true} )

const Message = models.Message || model("Message",messageSchema)

export default Message;