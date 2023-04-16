const express = require('express');
const app = express();
const PORT = 8080;
app.listen(PORT,()=>{
    console.log('server started')
})


app.use(express.static('build'));

const items = [
    {
        name:"laptop",
        price:50
    },{
        name:"desktop",
        price:30
    }
];

app.get("/api/items",(req,resp)=>{
    resp.send(items);
});

