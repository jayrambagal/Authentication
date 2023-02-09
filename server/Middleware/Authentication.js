const jwt = require("jsonwebtoken")
const User = require("../db/model/userSchema")
require("../config.env")



const Authenticate = async(req,res,next)=>{
    try{
       
        const token = req.cookies.jwttoken;
        
        const verifyToken = jwt.verify(token,process.env.private_key)
        
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
        
        if (!rootUser){throw new Error("user not found");}
            console.log("we are in console of rootuser")
        req.token = token
        req.rootUser = rootUser
        req.UserId = rootUser._id
        next()
    }catch(err){
        console.log(err)
        res.status(401).send()

    }

}

module.exports = Authenticate