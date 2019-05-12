var express = require('express');
var router = express.Router();

//Models

const Book = require ('../models/Book')

// Router methods 

router.post('/new', function(req, res, next) {
const book = new Book({
title:'NODEJS FUNDEMENTALS',
author:'Cem Yılmaz',
published:false,
comments: [{message:"hiç bitmiyor galiba."},{message:"güzel değildi. tavsiye etmiyorum"}],
meta : {votes:3,favs:8}

});

book.save((err,data)=>{
    if(err)
    console.log(err)

res.json(data)
})

});


router.get('/search', (req, res) => {
 Book.find({ published:false }, 'title comments' ,(err,data)=>{
     if(err)
     console.log(err)
    
     res.json(data)
 })
})

router.get('/searchAll',  (req, res) => {
    Book.find({},'title comments',(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })

   router.get('/findOne',  (req, res) => {
    Book.findOne({title:"NODEJS FUNDEMENTALS"},(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })

   router.get('/searchbyID',  (req, res) => {
    Book.findById('5cd7473e600e152be0e3c524',(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })

   router.put('/update',  (req, res) => {
    Book.update({published:true},{published:false}, {multi:true} ,(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })

   router.put('/updateByID',  (req, res) => {
    Book.findByIdAndUpdate('5cd6c29880853d2138e9996a',{title:'Turgutun kitabı'},(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })
router.delete('/remove',(req,res)=>{
    Book.findByIdAndRemove({published:true},(err,data)=>
    {   if(err)
        console.log(err)
        
        res.json(data)
})
})


router.get('/sortByFavs',(req,res)=>{
    Book.find({},(err,data)=>{
        res.json(data)
    }).sort({'meta.favs':1})
})

router.get('/sortByTitle',(req,res)=>{
    Book.find({},(err,data)=>{
        res.json(data)
    }).sort({'title':1})
})

// Aggregate

router.get('/Aggregate',(req,res)=>{
    Book.aggregate([
        {$match:{published:true}}
    ], (err,result)=>{res.json(result)})
})
router.get('/AggregateByTitle',(req,res)=>{
    Book.aggregate([
        {$match:{published:true}},{$project:{title:1}}
    ], (err,result)=>{res.json(result)})
})
module.exports = router;
