
const server=require('express');
const pullData =require('body-parser');
const https=require('https');
const app = server();
app.use(pullData.urlencoded({extended:true}));
app.get("/",(req,res)=> {
    const url='https://api.openweathermap.org/data/2.5/weather?units=metric&q=Hyderabad&appid=a16af815854c9327dcbd66faa49e816c';
    https.get(url,(resp)=>
    {
    resp.on("data",(data)=>{
        const temp=JSON.parse(data);
        console.log(temp.name);
        console.log(temp.main.temp);
        console.log(temp.weather[0].description);
    });
    });

});
app.listen(3000);