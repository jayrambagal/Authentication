const express = require("express");
const mongoose= require("mongoose");
const cookieParser = require('cookie-parser')
require("./config.env")


const app = express();

// Securing the url
app.use(cookieParser())
app.use(express.json())
app.use(require("./router/auth"))

DB = process.env.DATABASE
//  Handling  depriciation warning
mongoose.set('strictQuery', false);
// ***********{useNewUrlParser: true}

mongoose.connect("mongodb+srv://jayram:jayram1234@cluster0.ws3o64e.mongodb.net/new_learn_mearn?retryWrites=true&w=majority")
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(5000,async ()=>{
    console.log("Connected to server :)")
});


