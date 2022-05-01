// // // CTREATE DATABASES
// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host: "localhost",
//       user: "root",
//       password: "Karishma@123",
//       database: "project3rd"
//     }
//   });


const knex=require("knex")({
    client:"mysql",
    connection:{
      host:"localhost",
      user:"root",
      password:"Karishma@123",
      database:"project3"
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
  