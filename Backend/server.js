var mongodb=require('mongodb')
var express = require('express')
var mongoose = require('mongoose')
var transactions=require('./models/transaction')
var bodyParser=require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()
var app = express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1/expensetracker', {useNewUrlParser: true});
var db=mongoose.connection
app.get
('/api/transactions',jsonParser,async function(req,res){
    try{
        const trans = await transactions.module.find();
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
        res.send(trans).status(200)
    }
    catch(err){console.log(err)
    res.status(404)}
    
    }
),
app.post
('/api/addtransactions',jsonParser,async function(req,res){
   try
   {
    const post = req.body.trans;
    console.log(post)
   transactions.module.create(post);
    res.send(await transactions.module.find({})).status(200);
   }
   catch(err)
   {
       console.log(err);
       res.status(400);
   }
}),
app.delete('/api/deletetransactions/:uniqueId',async function(req,res)
{
    try
    {
        const trans = transactions.module.find(req.params);
       
        await transactions.module.remove(trans)
        res.status(200)
        res.send(await transactions.module.find())
        
        
    }    
    catch(err)
    {
        console.log(err);
        res.status(404)
    }
})
app.listen(8888)



