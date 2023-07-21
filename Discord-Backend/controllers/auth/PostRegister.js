const User = require("../../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const PostRegister = async (req,res)=>{
    
    try{
       const{ username, mail, password }=req.body;
      
       //check if the user is exist or not
       const userExists=await User.exists({ mail:mail.toLowerCase()})
       console.log(User,"pppppppppppppp")

       if(userExists){
        return res.status(409).send("Email already in use")
       }

       //encrypt password

       const encryptedPassword = await bcrypt.hash(password, 10)


       //save user document
       const user = await User.create({
        username,
        mail: mail.toLowerCase(),
        password: encryptedPassword
       })
 
      console.log(userExists,"pppppppppppppp")

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

       res.status(201).json({
        userDetails: {
            mail:user.mail,
            token:token,
            username:user.username
        }
       })

    }
    catch(err){
 
      return res.status(500).send("Error occured please try again")
    }
}

module.exports = PostRegister