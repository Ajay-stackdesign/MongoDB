const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mybd",{ useNewUrlParser: true, useUnifiedTopology: true} )
.then( () => {
    console.log("successfully send")
})
.catch( (err) => {
    console.log(err)
})

const PlaylistSchema = new mongoose.Schema ( {
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

const Worklist = new  mongoose.model("Worklist",PlaylistSchema);
const work = new Worklist({
    name:"express",
    type:"backend",
    working: "no",
    active: true
})

work.save()


const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log("ok received")
})
.catch( (err) =>{
    console.log(err)
})

const StudentSchema = new mongoose.Schema({
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

const Work = new mongoose.model("Work",StudentSchema)

const createDocument = async () => {
    try{
        const list = new Work({
            name: "node.js",
            active: true
        })

        const result = await list.save();

    }catch(err){
        console.log(err)
    }
}

createDocument()
const exp = new Work({
    name: "express",
    active: true
})

exp.save()
.then( () => {
    console.log("hello world")
})
.catch( (err) => {
    console.log(err)
})

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
            working: "no"
        })
        const reult = await list.save();
        console.log(reult)
    }catch(err){
        console.log(err)
    }
}

createCont()

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mybd", { useNewUrlParser: true})
    


