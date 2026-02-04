// Step 1
const express = require('express')
const app = express()
const morgan = require('morgan')

//middleware
app.use(morgan('dev'))


// Step 3
app.get('/api',(req,res)=>{
    //code
    res.send('Hello World')
})

// Step 2
app.listen(5001,()=> console.log("Server Running is on port 5001"))