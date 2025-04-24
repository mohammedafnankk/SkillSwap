import db from '../config/db.js'

const MentorSchema = db.Schema({
    username:String,
    email:String,
    password:String,
    role:String,
    company:String,
    education:String,
    website:String,
    bio:String,
    level:String,
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
    skill_discription:String,
    joined_date: String


})
const Mentor = db.model('mentors',MentorSchema)
export default Mentor