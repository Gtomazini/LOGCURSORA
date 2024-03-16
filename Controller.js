const express = require('express');
const cors = require('cors');
const bParser = require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bParser.urlencoded({ extended: false}));
app.use(bParser.json());
let user=models.User;
let tracking=models.Tracking;
let product=models.Product;

//********** */ CRUD BASICO*****************

// LOGIN
app.post('/login', async(req,res)=>{
    let response = await user.findOne({
        where:{name:req.body.name, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

let port = process.env.PORT || 3000
app.listen(port, (req,res)=>{
    console.log('Servidor rodando');
});