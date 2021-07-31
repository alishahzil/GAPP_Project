const express = require('express')
const route = require('./Routers/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const port = 5000

const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb+srv://ali123:ali123@cluster0.mneph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`connected to database`)
}


connectDB()


app.use(bodyParser.json())

app.use('/',route)

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
})
