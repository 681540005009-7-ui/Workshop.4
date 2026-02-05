// Step 1
const express = require('express')
const app = express()
const morgan = require('morgan')

//middleware
app.use(morgan('dev'))
app.use(express.json())


// Step 3
app.post('/api',(req,res)=>{
    //code
    const { username,password } = req.body
    console.log(username,password)
    res.send('Hello World')
})

// Step 2
app.listen(5001,()=> console.log("Server Running is on port 5001"))