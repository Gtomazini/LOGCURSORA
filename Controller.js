const express = require('express');
const cors = require('cors');
const bParser = require('body-parser');

const app=express();
app.use(cors());
app.use(bParser.urlencoded({ extended: false}));

app.get('/', (req,res)=>{
    res.send('teste back');
});

let port = process.env.PORT || 3000
app.listen(port, (req,res)=>{
    console.log('Servidor rodando');
});