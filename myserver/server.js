
const { request, response } = require('express');
const server = require('express');
const app=server();
const port = 3000;
app.get("/", (request,response)=>{response.send("hello world!");});
app.get("/2", (request,response)=>{response.send("hello world! once again");});
app.listen(port, () => `Server running on port ${port} 🔥`);