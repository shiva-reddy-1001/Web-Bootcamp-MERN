import express from 'express'
import axios from 'axios'

const app = express();
app.listen(8000);

app.get("/:word",(req,res)=>{
    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: {country: req.params.word, day: '2020-05-10'},
      headers: {
        'x-rapidapi-key': 'f0e2b73fd2mshc58493bc8f14dc3p1e8814jsn8d57fb9786bd',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (resp) {
      var data =resp.data.response
       res.json(data);
    }).catch(function (error) {
        console.error(error);
    });
})
