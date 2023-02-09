const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const Authenticate = require("../Middleware/Authentication")

require("../app");
require("cookie-parser")
const User = require("../db/model/userSchema")

// for the registration field take a data from ui and apply validationon it and store it into database oky done...
router.post("/register",async(req,res) => {

    const {name,email,phone,work,password,cpassword} = req.body

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"fill all the data fields "})
    }
    try{
        const userExist = await User.findOne({email:email})

        if(userExist){
            res.status(422).json({error:"user is alredy exists"})
        }else if(password != cpassword){
            res.status(422).json({error:"cpass error"})
        }else{
            const user = new User({name,email,phone,work,password,cpassword})

        await user.save()
        
        res.status(201).json({message:"sucsessfull"})

        }   
    }catch(err){
        console.log(err)
    }   
})

// for signin page we validate the user data if data is already present in database we validate the data and login process will happened

router.post("/signin",async(req,res)=>{
    try{
        const {email,password} = req.body

        if(!email || !password){
            res.status(400).json({error:"email and password booth are require"})
        }

        const userLogin = await User.findOne({email:email})

        if(!userLogin){
            res.status(400).json({error:"invalid password"})   
        }
        else{
            
            const isMatch = await bcrypt.compare(password,userLogin.password);

            // adding jwt token
            const token = await userLogin.generateAuthToken()
            
            // store jwt token in cookie 
            res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!isMatch){
                console.log("we are in not ismatch")
                res.status(400).json({message:"invalid password"})
            }
            else{
                res.status(200).json({message:"user login succesfully"})
            }
        }

    }catch(err){
        console.log("error in signin auth")
        console.log(err)
    }
})

router.get("/about",Authenticate,(req,res)=>{
    console.log("hello about")
    res.send(req.rootUser)
    console.log(req.cookies);
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    console.log(token);
    
})

router.get("/logout",(req,res)=>{
    console.log("we are in logout")
    res.clearCookie("jwttoken",{path:"/"})
    res.status(200).send("user logout")
})

module.exports = router;
