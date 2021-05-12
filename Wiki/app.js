//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Mongoose  = require("mongoose");
Mongoose.connect("mongodb://localhost:27017/Wiki",{useNewUrlParser : true,useUnifiedTopology:true});
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

const articleSchema = Mongoose.Schema({
    title : String,content: String
});
const Article = Mongoose.model("Article",articleSchema);

app.route("/articles")
.get((req, res) => {
    Article.find((err,data)=>{
        res.send(data);
    });
})
.post( (req, res) => {
    const newArticle = new Article({
        title:req.body.title,
        content : req.body.content
    });
    newArticle.save((err)=>{
        if(!err) 
        res.send("Success");
        else 
        res.send(err);
    });
})
.delete((req,res)=>{
    Article.deleteMany({},function(err){
        if(err) res.send(err);
        else res.send("success");
    });
});

app.route("/articles/:id")
.get((req,res)=>{
    Article.findOne({title:req.params.id},(err,data)=>{
        if(data)
        res.send(data);
        else
        res.send("No Match");
    });
})
.put((req,res)=>{
    Article.updateOne(
        {title:req.params.id},
        {title:req.body.title,content : req.body.content},
        (err)=>{
            if(!err) 
            res.send("Success");
        }
    );
})
.patch((req,res)=>{
    Article.updateOne(
        {title:req.params.id},
        {$set : req.body},
        (err)=>{
            if(!err) 
            res.send("Success");
        }
    );
})
.delete((req,res)=>{
    Article.deleteMany(
        {title:req.params.id},
        (err)=>{
            if(err)
            res.send(err);
            else
            res.send("Success");
        }
    );
});