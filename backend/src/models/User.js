import db from '../config/db.js'

const UserSchema = db.Schema({
    username:String,
    email:String,
    password:String,
    role:String,
    avatar:String,
    address:[
        {
            street:String,
            state:String,
            city:String,
            pincode:Number,
            country:String
        }
    ],
    skills:[],
    joined_date: String
    

})
const User = db.model('users',UserSchema)
export default User