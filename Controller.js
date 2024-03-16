const express = require('express');
const cors = require('cors');
const bParser = require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bParser.urlencoded({ extended: false}));
let user=models.User;
let tracking=models.Tracking;
let product=models.Product;

//********** */ CRUD BASICO*****************

// CREATE
app.get('/create', async(req,res)=>{
    let create =await user.create({
        name: "joao", 
        password: "abc",
        createdAt: new Date(),
        updateAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

// READ
app.get('/read', async(req,res)=>{
 let read=await user.findAll({
    raw:true
 });
 console.log(read);
});

// UPDATE
app.get('/update', async(req,res)=>{
    let update=await user.findByPk(1).then((response)=>{
        response.name='Gabrieis';
        response.password='novaSenha';
        response.save();
    });

   });

// DELETE
app.get('/delete', async(req,res)=>{
    user.destroy({
        where: {
            id:2
            }
        });
    });

    
let port = process.env.PORT || 3000
app.listen(port, (req,res)=>{
    console.log('Servidor rodando');
});