const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (req,res)=>{
    res.send("House Hunter is running")
})




app.listen(port, (req,res)=>{
    console.log(`HouseHunter is listening on ${port}`);
})