const mongoose = require('mongoose');
// const Songs = require('../Songs/Songs');


const User = new mongoose.Schema({

    name : {type: String , required:true }
    ,id: {type: Number ,  required:true , unique:true}
    ,songs : []

})

module.exports = mongoose.model('User' , User)
