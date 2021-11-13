// // //import mongoose from "mongoose";
// // const mongoose = require("mongoose")

// // mongoose.connect("mongodb://localhost:27017/datacoll",( { useNewUrlParser: true, useUnifiedTopology: true } ))
// // .then( () => console.log("connection successful"))
// // .catch( (err) => console.log("err")) 

// // const mongoose = require('mongoose')//.MongoClient;
// // //Create a database named "mydb":
// // // var url = "mongodb://localhost:27017/mydb";

// // mongoose.connect("mongodb://localhost:27017/mydb", function(err, db) {
// //   if (err) throw err;
// //   console.log("Database created!");
// //   db.close();
// // });





// const mongoose = require("mongoose")
// // const { endianness } = require("os")
// //connection creation and creatin a new db.
// mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("successful")
//     })
//     .catch(() => {
//         console.log(err)
//     })
// //schema
// //A mongoose Schema defines the structure of the document,
// //default values,validators, etc .,

// // const PlaylistSchema = new mongoose.Schema({
// //     name: {
// //         type: String,
// //         required: true
// //     },
// //     ctype: String,
// //     videos: Number,
// //     active: Boolean,
// //     date: {

// //         type: Date,
// //         dafault: Date.now
// //     }
// // })

// //A mongoose model is a wrapper on the mongoosee schema
// //A Mongoose Schema defines the structure of the document.
// //dafault values , validators,etc..,whereas a Mongoose model 
// // provides an interface tot the database for creating
// // querting, updating,deleting,cords,etc.

// //collection creation

// // const Playlist = new mongoose.model("Playlist", PlaylistSchema);
// // //create a document or insert a document.
// // const reactPlaylist = new Playlist({  //creatinf a document
// //     name : "React JS",
// //     ctype : "Front End",
// //     videos : 9,
// //     author : "thapa technical",
// //     active : true
// // })
    

// //   reactPlaylist.save()  

// const worklistSchema = new mongoose.Schema({
//         name: {
//             type: String,
//             required: true
//         },
//         ctype: String,
//         videos: Number,
//         active: Boolean,
//         date: {
    
//             type: Date,
//             dafault: Date.now
//         }
//     })

// const Worklist = new mongoose.model("Worklist",worklistSchema);

// const nodeWorklist = new Worklist({
//     name: "node.js",
//     ctype: "Backend",
//     active: true
// })

// nodeWorklist.save()



const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mycollection",{ useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("your data is ready")
})
.catch( () => {
    console.log(err)
})

const WorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Work = new mongoose.model("Work",WorkSchema);

const workexpress = new Work({
    name: "epress",
    type:"full stack mern",
    active: true
})

workexpress.save();