import db from "../config/db.js";

const MessageSchema = db.Schema({
  senderId: { type: db.Schema.Types.ObjectId, ref: "User" },
  receiverId: { type: db.Schema.Types.ObjectId, ref: "User" },
  text: String,
  createdAt: { type: Date, default: Date.now },
});
const Message = db.model("Message", MessageSchema);
export default Message;
