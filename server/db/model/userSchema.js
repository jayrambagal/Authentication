const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,   
    },
    work:{
        type:String,
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    tokens:[{
        token:{
            type:String,
            require:true
        }
    }]
})

// secure the passsword and store it in database useinf hashing
userSchema.pre('save',async function(next){
    console.log("we are in middleware")

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password , 12)
        this.cpassword = await bcrypt.hash(this.cpassword , 12)
    }
    next()
})

// JWT tokens
userSchema.methods.generateAuthToken = async function(){
    try{
        console.log("generate token")
        let token = jwt.sign({_id:this._id},process.env.private_key)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token

    }catch(err){
        console.log("error in userschema/generate token")
        console.log(err)}
}

module.exports =  mongoose.model('User', userSchema)