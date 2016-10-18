const mongoose = require('mongoose');

const Songs = new mongoose.Schema( {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  ,songUrl : {type: String, require: true}


} );

module.exports = mongoose.model('Songs', Songs)
