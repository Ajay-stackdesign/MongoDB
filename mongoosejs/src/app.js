// //import mongoose from "mongoose";
// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/datacoll",( { useNewUrlParser: true, useUnifiedTopology: true } ))
// .then( () => console.log("connection successful"))
// .catch( (err) => console.log("err")) 

// const mongoose = require('mongoose')//.MongoClient;
// //Create a database named "mydb":
// // var url = "mongodb://localhost:27017/mydb";

// mongoose.connect("mongodb://localhost:27017/mydb", function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });





const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mydb",{ useNewUrlParser: true , useUnifiedTopology: true })
.then( () => {
    console.log("successful")
})
.catch( () => {
    console.log(err)
})