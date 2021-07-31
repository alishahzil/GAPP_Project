const mongoose  = require('mongoose')


const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    team:[{
        type:mongoose.Schema.ObjectId
    }]  
})


module.exports = mongoose.model('Department',DepartmentSchema)