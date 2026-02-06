// Step 1
const express = require('express')
const app = express()
const morgan = require('morgan')

const authRouter = require('./routes/auth')
const category = require('./routes/category')

//middleware
app.use(morgan('dev'))
app.use(express.json())

app.use('/api',authRouter,(req,res)=>{
    res.send('Hello register')
})
    
app.use('/api',category,(req,res)=>{
    res.send('Hello category')
})

// Step 3
app.post('/api',(req,res)=>{
    //code 
    const { username,password } = req.body
    console.log(username,password)
    res.send('Hello world')
})


// Step 2
app.listen(5001,()=> console.log("Server Running is on port 5001"))