
const knex=require("knex")({
    client:"mysql",
    connection:{
      host:"localhost",
      user:"root",
      password:"Karishma@123",
      database:"like_dislike"
    }
  })
  
  knex.schema.hasTable('like_dislike').then(function(exists){
    if (!exists){
      return knex.schema.createTable('like_dislike',function(table){
  
        table.string('likes',255)
        table.string('dislike',255)
        table.string('post_id',255)
        table.string('user_id',255)
       
  
      })
      .then(()=>{
        console.log("Table created")
      }).catch((err)=>{
        console.log(err)
      })
    }
  })
  