const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/FruitsDB",{useNewUrlParser:true});
const fruitsschema = new mongoose.Schema({
    name: String, rating: Number, review: String
});

const fruit = mongoose.model("fruit",fruitsschema);
const Fruit =  new fruit({
    name: "Apple",rating:10,review:"Juicy"
});

Fruit.save();

const personS = new mongoose.Schema({
    name:String,age:Number
});

const person = new mongoose.model("person",personS);
const Person =  new person({
    name:"shiva",age:19
});

Person.save();

const banana =  new fruit({
    name:"banana",rating:7,review:"Yum"
});

const cherry =  new fruit({
    name:"cherry",rating:8,review:"good"
});

const pear =  new fruit({
    name:"pear",rating:9,review:"tasty"
});

fruit.insertMany([banana,cherry,pear],function(err){
    if(err) console.log(err);
    else console.log("Success");
});

fruit.find(function(err, fruits){
    if(err) console.log(err);
    else mongoose.connection.close(),fruits.forEach(function(fruits){console.log(fruits.name);});
});

fruit.updateOne({_id:"6058e8eaecf3a50a103dbf35"},{name:"pineapple"},function(err){
    if(err) console.log(err);
    else console.log("success");
});

fruit.deleteMany({name:"banana"},function(err){
    if(err) console.log(err);
    else console.log("success");
});