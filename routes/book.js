var express = require('express');
var router = express.Router();

//Models

const Book = require ('../models/Book')

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
    Book.findById({published:true},{published:false}, {multi:true} ,(err,data)=>{
        if(err)
        console.log(err)
       
        res.json(data)
    })
   })

module.exports = router;
