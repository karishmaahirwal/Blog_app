const verifyToken=(req,res,next)=>{
    try{
        var token=req.cookies.jwt
        console.log(token)
        var decode=jwt.verify(token,key)
        req.userdata=decode
        console.log(decode)
        next()
    }catch(err){
        console.log(err)
        res.send({message:"invalid token"})
    }
}

