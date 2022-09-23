const express=require('express')
const app=express()
const database=require('./Database.json')

app.get('/',(req,res)=>{
    res.send('Hoş geldiniz')
})
