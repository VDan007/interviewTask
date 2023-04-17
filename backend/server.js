const express = require("express");

const app = express();

const db = {
    initialCurrencies : ['EUR','HUF'],
    rates : {
        HUFtoEUR: 1/330,
        EURtoHUF: 330,
    },
};

const PORT =  8888;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

app.use(express.static("dist"));



app.get("/symbols", (req, res) => {
  res.send(db.initialCurrencies);
});

app.get("/convert",(req,res)=>{
    const amount = req.query.amount;
    const from = req.query.from;
    const to = req.query.to;
    const key =  `${from}to${to}`;
    const result = amount * db.rates[key];
    res.send(result.toString());
})

app.post("/change-rate",(req,res)=>{
    const from = req.query.from;
    const to = req.query.to;
    const rate = req.query.rate;
    const key = `${from}to${to}`;
    if(Object.keys(db.rates).includes(key)){
        res.status(400).send({
            message: 'This rate has been already set!'
        });
    } else {
        
        db.rates = { ...db.rates,[key]:rate};
      
        if(!db.initialCurrencies.includes(from)){
            db.initialCurrencies.push(from);
            console.log(db.initialCurrencies);
        }         
    }
})