const express=require("express")
const router=express.Router()
const auth=require("../middleware/auth")
const authControllers=require("../controllers/auth/authControllers")

const Joi=require("joi")
const validator=require("express-joi-validation").createValidator({})


const regissterSchema=Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required()
})

const loginSchema=Joi.object({
   
    password:Joi.string().min(6).max(12).required(),
    mail:Joi.string().email().required()
})




router.post("/register",validator.body(regissterSchema), authControllers.controllers.PostRegister)
router.post("/login",validator.body(loginSchema) ,authControllers.controllers.PostLogin)
//test route
router.get('/test',auth,(req,res)=>{
    res.send("reqst passed")
})

module.exports=router