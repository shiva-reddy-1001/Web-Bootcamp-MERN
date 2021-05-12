

const bodyParser = require("body-parser");
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ToDo",{useNewUrlParser:true});
const server = require("express");
const parser = require("body-parser");

const app =server();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css',server.static('public/css'));
const ToDoschema = new mongoose.Schema({name:String});
const ToDo = mongoose.model("ToDo",ToDoschema);
const Assignment = new ToDo({
    name:"Assignment"
});
const Shopping = new ToDo({
    name:"Shopping"
});
var newtask=[Assignment,Shopping];

app.get("/",(req,res)=>{
    var date = new Date();
    var form={
        day : "numeric",
        month : "long",
        weekday : "long"
    };
    var dayS=date.toLocaleDateString("en-IN",form);
    ToDo.find(function(err,data){
        if(err) console.log(err);
        if(data.length===0) {
            ToDo.insertMany(newtask,function(err){
                if(err) console.log(err);
                else console.log("Success");
            });
            res.redirect("/");
        }
        else{
        res.render("index",{
            day_key : dayS,
            added : data
        });
    }
    });
});

app.get("/:userdef", (req, res) => {
   const name = req.params.userdef;
});

app.post("/",(req1,res1)=>{
    const temp = new ToDo({name:req1.body.addlist});
    temp.save();
    newtask.push(temp);
    res1.redirect("/");
});
app.post("/delete", (req, res) => {
    const foundID= req.body.status;
    ToDo.findByIdAndRemove(foundID,function(err){
        if(err) console.log(err);
    });
    res.redirect("/");
});
app.listen(3000);