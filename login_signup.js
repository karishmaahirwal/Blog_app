const knex=require("../model/database_login")
const bcrypt = require("bcrypt")
const cookie=require('cookie-parser')
const jwt = require("jsonwebtoken")
// const { default: knex } = require("knex")
// const knex = require("knex")

const signup = (req,res)=>{
    const hash=bcrypt.hashSync(req.body.password,10)
    const data={
        name:req.body.name,
        password:hash,
        email:req.body.email,
    }
    knex("signup").insert(data).then((result)=>{
        res.send({sucess:"signup sucessfully"})
    })
    .catch((err)=>{
        if(err){
            console.log(err);
            res.status(400).send({error:err})
        }
    })
}

// const get_signup=(req,res)=>{
//     knex.from("register").select("*")
//     .then((row)=>{
//         res.send(row)
//     })
//     .catch((err)=>{

//     })
// }

// const login=(req,res)=>{
//     const user=req.body;
//     knex.from("register").select("*").where("email",user.email).then((data)=>{
//         console.log(data)
//         if(data.length>0){
//             for(d of data)
//             usepassword=d["password"]
//             const verified=bcrypt.compareSync(user,usepassword.tostring());
//             console.log(d)
//             if(verified){
//                 jwt.sign({user_id:d.user_id},"key",(err,token)=>{
//                     if(token){
//                         console.log(token)
//                         res.cookies("jwt",token)
//                         res.send({
//                             message:"you signup successfully",
//                             Token:token
//                         })
//                     }
//                 })
//             }else{
//                 res.send("password is not correct")
//             }
//         }else{
//             res.status(403).send("user dosn't exist")
//         }
//     })
// }

module.exports={signup}
// module.exports={get_signup}
