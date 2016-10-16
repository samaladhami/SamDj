const mongoose = require('mongoose');
const multer = require('multer');

const Songs = new mongoose.Schema( {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  ,title: { type:String , trim:true , required:true }
  // ,data: { type:Object , required:true }
  ,artist: {type: String , trim:true , default: 'unknown'}


} );

module.exports = mongoose.model('Songs', Songs)
