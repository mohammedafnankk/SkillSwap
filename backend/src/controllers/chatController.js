import Message from "../models/Message.js";

export const createMessage = async(req,res)=>{
   try {
    const {senderId,recieverId,text}= req.body
const message = new Message({
    senderId,
    recieverId,
    text
})
const savedMessage = await message.save()
res.status(200).json({savedMessage})
   } catch (error) {
    console.error('Create Message Error:', error);
    res.status(500).json({ message: 'Server Error' });
   }
}

export const getMessage = async(req,res)=>{
    try {
        const { senderId, receiverId } = req.query;
    
        const messages = await Message.find({
          $or: [
            { senderId, receiverId },
            { senderId: receiverId, receiverId: senderId }
          ]
        }).sort({ timestamp: 1 }); // oldest to newest
    
        res.status(200).json(messages);
      } catch (error) {
        console.error('Get Messages Error:', error);
        res.status(500).json({ message: 'Server Error' });
      }
}

export default {createMessage}