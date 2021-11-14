// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/mybd",{ useNewUrlParser: true, useUnifiedTopology: true} )
// .then( () => {
//     console.log("successfully send")
// })
// .catch( (err) => {
//     console.log(err)
// })

// const PlaylistSchema = new mongoose.Schema ( {
//     name: {
//         type: String,
//         required: true
//     },
//     ctype: String,
//     videos: Number,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const Worklist = new  mongoose.model("Worklist",PlaylistSchema);
// const work = new Worklist({
//     name:"express",
//     type:"backend",
//     working: "no",
//     active: true
// })

// work.save()


// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
// .then( () => {
//     console.log("ok received")
// })
// .catch( (err) =>{
//     console.log(err)
// })

// const StudentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     ctype: String,
//     videos: Number,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const Work = new mongoose.model("Work",StudentSchema)

// const createDocument = async () => {
//     try{
//         const list = new Work({
//             name: "node.js",
//             active: true
//         })

//         const result = await list.save();

//     }catch(err){
//         console.log(err)
//     }
// }

// createDocument()
// const exp = new Work({
//     name: "express",
//     active: true
// })

// exp.save()
// .then( () => {
//     console.log("hello world")
// })
// .catch( (err) => {
//     console.log(err)
// })

const { findSourceMap } = require("module")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mybd", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("true")
    })
    .catch((err) => {
        console.log(err)
    })


const PlaylistSchema = new mongoose.Schema({
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

const Works = new mongoose.model("Work", PlaylistSchema);
//creating a collection.

const createCont =  async () => {
    try{
        const list = new Works ({
            name: "mongoDB",
            active: true,
            videos: 79,
            working: "no"
        })
        const list1 = new Works ({
            name: "express",
            active: true,
            videos: 78,
            working: "no"
        })
        const list2 = new Works ({
            name: "node",
            active: true,
            videos: 77,
            working: "no"
        })
        const list3 = new Works ({
            name: "react",
            active: true,
            videos: 76,
            working: "no"
        })

        const reult = await Works.insertMany([list,list1,list2,list3]);
        console.log(reult)
    }catch(err){
        console.log(err)
    }
}

createCont()

const getDocument = async () => {
    const result = await Works
    // .find({videos: {$gte: 79}})
    .find()
    .sort("name: 1")
    console.log(result);
}

getDocument();

// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/mybd", { useNewUrlParser: true, useUnifiedTopology: true})
// .then( () => {
//     console.log("successfull")
// })
// .catch( (err) => {
//     console.log(err)
// })

// const playlistSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     ctype: String,
//     videos: Number,
//     author: String,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const Playlist = new mongoose.model("Playlist",playlistSchema)

// const createCol = async () => {
//     try{
//         const worklist = new Playlist({
//             name: "ajay",
//             videos: 1,
//             active: true
//         })

//         const node = new Playlist({
//             name: "sahani",
//             videos: 3,
//             active: true
//         })
//         const react = new Playlist({
//             name: "geeta",
//             videos: 3,
//             active: true
//         })
//         const express = new Playlist({
//             name: "sahani",
//             videos: 2,
//             active: true

//         })

//         const result = await Playlist.insertMany([worklist,node,react.express])
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// createCol();


