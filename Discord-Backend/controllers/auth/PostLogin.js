const User = require("../../models/user")
const bcrypt = require("bcryptjs")
const jwt= require ("jsonwebtoken")


const PostLogin=async (req,res)=>{
    console.log(req.body,"postlogin")
    try{

        const{mail,password}=req.body;

       

        const user=await User.findOne({ mail:mail.toLowerCase()})



        if(user && (await bcrypt.compare(password,user.password))){
            // send newtoken
            const token=jwt.sign(
                {
                    userId:user._id,
                    mail,
                },
                process.env.TOKEN,
                {
                    expiresIn:"24h"
                }
               )

            return res.status(200).json({
                userDetails: {
                    mail:user.mail,
                    token:token,
                    username:user.username
                }
            })
        }
        return res.status(400).send("Invalid credentials. please try again")
    }
    catch(err){
        return res.status(500).send('something went wrong please try again')
    }
}

module.exports=PostLogin