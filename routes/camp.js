const express=require('express')

const router=express.Router()


router.get('/',(req,res)=>
{
    res.send('hi')
})

router.get('/',(req,res)=>
{
    res.send('hi camp')
})

router.get('/:id',(req,res)=>
{
    res.send('camp id')
})

module.exports=router;