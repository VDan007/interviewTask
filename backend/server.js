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
    console.log(result);
})