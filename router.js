const express=require("express")
const cookies=require("cookie-parser")
const router=express.Router()

const{ signup}=require("../controller/login_signup")

router.post("/post",signup)



// const {auth}=require("../controller/auth")


module.exports=router