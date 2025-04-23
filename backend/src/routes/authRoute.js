import express from "express";
import { registerUser , login } from '../controllers/authController.js'
import { students , mentors , singleMentor, personalInfo, singleUser,sug, topic,edit} from "../controllers/userController.js";

const router = express.Router()

router.post('/register',registerUser)
router.post('/login' ,login)
router.get('/allstudents',students)
router.get('/allmentors',mentors)
router.get('/mentor/:_id',singleMentor)
router.patch('/personalinfo/:_id',personalInfo)
router.patch('/topic/:_id',topic)
router.get('/singleuser/:_id',singleUser)
router.get('/user/:_id',edit)

router.get('/sug/:_id',sug)

export default router