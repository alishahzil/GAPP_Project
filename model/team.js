const mongoose = require('mongoose')


const teamSchema = new mongoose.Schema({
    people:[{
        type: mongoose.Schema.ObjectId
    }],
    teamLead:{
        type: mongoose.Schema.ObjectId
    }

})


module.exports  = mongoose.model('Team',teamSchema)