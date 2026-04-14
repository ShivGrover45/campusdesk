const express=require('express')
const cookie=require('cookie-parser')
const authRouter = require('./modules/auth/auth.routes')

app.use(express.json())
app.use(cookie())
app.use('/api/auth',authRouter)
const app=express()


module.exports=app