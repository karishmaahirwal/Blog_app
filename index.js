const express=require("express")
const router=require("./view/router")
const bodyparse=require('body-parser')
const cookie = require('cookie-parser')


const port=2000
const app=express()
app.use(cookie())
app.use(express.json())
app.use('/',router)


app.listen(port,()=>{
console.log(`server starts at port no ${port}`)
})