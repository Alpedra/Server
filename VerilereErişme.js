const express=require('express')
const app=express()
const database=require('./Database.json')

app.get('/',(req,res)=>{
    res.send('Hoş geldiniz')
})

app.get('/users/:uid',(req,res)=>{
    let founduser=database.Users.find(x,(x.Id==req.params.uid))
    let jsonstring=JSON.stringify(founduser)
    res.send(jsonstring)
})

app.listen(3000,(req,res)=>{
   console.log('Server başlatıldı')
})