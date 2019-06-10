const express = require ('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const morgan = require('morgan');
app.use(morgan('short'));

app.use(express.static("./public"));

app.get("/",(req,res)=>{
    res.status(300).send("Hello");
    res.end();
});

app.post("/adduser", (req,res)=>{
    res.json(req.body);    
});

app.listen(3000, ()=> {console.log ("Listening on port 3000")});