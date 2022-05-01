const express = require("express")
const app = express()
const mysql = require("mysql")
const router = require("../view/router")
const { route, post } = require("../view/router")

router.get('/mypost',function(req,res){
post.find({post_id:req.user_id})
.then((mypost)=>{
    res.json({mypost})
}).catch((err)=>{
    console.log(err)
})
})

// router.put("./like",(req,res)=>{
    
router.post('/like/:id', function(req, res){
    blogModel.update({_id:req.params.id},{$push:{likes:req.user.id}}, function(err, data){
            if(err){res.json(err)}
            else{console.log('liked by'+ req.user.name)
        }
        });
        });

// })



module.exports = router
