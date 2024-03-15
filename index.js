const express=require('express')
const app=express()
const cr=require('./routes/camp')
const dr=require('./routes/dog')
app.use('/camp',cr)
app.use('/dog',dr)
app.listen(3000,()=>
{
  console.log('server running on')  
})