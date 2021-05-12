//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Mongoose  = require("mongoose");
const encrypt = require("mongoose-encryption");

Mongoose.connect("mongodb://localhost:27017/Secrets",{useNewUrlParser : true,useUnifiedTopology:true});
const app = express();
const credentialsSchema = new Mongoose.Schema({
    username : String, password : String
});
app.set('view engine', 'ejs');
//console.log(process.env.SECRET);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

//const secret = "Ittakesyouyearstoguessthisstring";
credentialsSchema.plugin(encrypt,{secret : process.env.SECRET,encryptedFields:['password']});
const credential = Mongoose.model("credential",credentialsSchema);

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/submit",(req,res)=>{
    res.render("submit");
});

app.post("/register", (req, res) => {
    const newUser = new credential({
        username : req.body.username, password: req.body.password
    });
    newUser.save((err)=>{if(!err) res.render("secrets");});
});

app.post("/login", (req, res) => {
    credential.find({username:req.body.username,password:req.body.password},(err,data)=>{
        if(!err)
        {
            res.render("secrets");
        }
    });
});