var AWS = require('aws-sdk');
const config = require('./config.js');
const songsCtrl = require('./Songs/songsCtrl');
var Keys = config.amazon


// Hard amazon aws config
AWS.config.update({
    accessKeyId: Keys.amazonAccess
  , secretAccessKey: Keys.amazonSecret

});

var s3 = new AWS.S3();

var exports = module.exports = {};


exports.saveSong = function (req, res) {
  var buf = new Buffer(req.body.songBody.replace(/^data:song\/\w+;base64,/, ""), 'base64');

  // bucketName var below crates a "folder" for each user
  var bucketName = 'samirmouied5859/' + req.body.userEmail;
  var params = {
      Bucket: bucketName
    , Key: req.body.songName
    , Body: buf
    , ContentType: 'audio/' + req.body.imageExtension
    , ACL: 'public-read'
  };

  s3.upload(params, function (err, data) {
    console.log('this is the data.Location ');
    console.log(data.Location);
    if (err) {return res.status(500).send(err);}

    // TODO: save data to mongo
    res.json(data);


    // User.findByIdAndUpdate(req.params.user_id , { $push : { songs: {songUrl:data.Location} } } , ( error , response) => {
    //   if ( error ) {
    //     console.log('it can not push');
    //     return res.status( 500 ).json( err );
    //   }
    //   else {
    //     console.log('Added');
    //     console.log('this is the response');
    //
    //     return res.status( 200 ).json( response )
    //   }
    //
    // } )
  });
}


  exports.getSongs = function(req , res) {

//     var params = {Bucket: 'samirmouied5859' };
//
//     s3.getBucket(params, function(err, data) {
//   if (err) {console.log(err, err.stack);} // an error occurred
//   else {
//     console.log(data);
//     return res.status( 200 ).send(data)
//   }          // successful response
// });
  }

// exports.deleteImage = function (req, res) {
// 	var imgName = req.body.image.Location.split('/');
// 	imgName = imgName[imgName.length - 1];
//
// 	var params = {
// 	  Bucket: req.body.image.imgPath,
// 	  Key: imgName
// 	};
//
// 	s3.deleteObject(params, function(err, data) {
// 	  if (err) return res.status(500).send(err.stack); //(err, err.stack);
//
// 	  //Remove from user image list
// 	  User.findById(req.body.userId, function (err, user) {
// 	  	if (err) return res.status(500).send(err);
//
// 	  	user.images = user.images.filter(function (image, index) {
// 	  		if (image.Location === req.body.image.Location) return false;
// 	  		return true;
// 	  	})
//
// 	  	user.save(function (err, result) {
// 	  		if (err) return res.status(500).send(err);
// 	  		return res.json(result);
// 	  	})
// 	  })
// 	});
// }
