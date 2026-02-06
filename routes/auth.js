// import ...
const express = require('express')
const router = express.Router()

router.get('/regsiter',(req,res)=>{
    res.send('Hello Register')
})

module.exports = router