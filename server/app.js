const express = require('express');
const app = express();
const PORT = 8080;
app.listen(PORT,()=>{
    console.log('server started')
})


app.use(express.static('build'));

const symbols = ['EUR','HUF','CHF'];
const rate = [330];

app.get("/symbols",(req,res)=>{
    res.send(symbols);
});






app.get("/convert",(req,res)=>{
    console.log(req.query);
   const amount = req.query.amount;
   const from = req.query.from;
   const to = req.query.to;

   if(from === 'HUF'){
        const euroAmount = amount / rate;
        res.sendStatus(euroAmount);
    } else if (from === 'EUR'){
        constForintAmount = amount* rate;
        res.sendStatus(constForintAmount);
    }
  

})

