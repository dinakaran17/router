const express=require('express')

const router=express.Router();



router.get('/',(req,res)=>
{
    res.send('dina')
})
router.get('/:id',(req,res)=>
{
    res.send('welocme')
})

module.exports=router;