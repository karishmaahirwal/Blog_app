// // // CTREATE DATABASES
// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host: "localhost",
//       user: "root",
//       password: "your password",
//       database: "db name"
//     }
//   });


const knex=require("knex")({
    client:"mysql",
    connection:{
      host:"localhost",
      user:"root",
      password:"your password",
      database:"db name"
    }
  })
  
  knex.schema.hasTable('project3').then(function(exists){
    if (!exists){
      return knex.schema.createTable('project3',function(table){
  
        table.string('username',255)
        table.string('password',255)
        table.string('email',255)
       
  
      })
      .then(()=>{
        console.log("Table created")
      }).catch((err)=>{
        console.log(err)
      })
    }
  })
  
