var AWS = require('aws-sdk');
const config = require('./config.js');
const songsCtrl = require('./Songs/songsCtrl');
const User = require('./User/User');
var Keys = config.amazon


// Hard amazon aws config
AWS.config.update({
    accessKeyId: Keys.amazonAccess
  , secretAccessKey: Keys.amazonSecret

});

var s3 = new AWS.S3();

var exports = module.exports = {};


exports.saveSong = function (req, res) {
  var buf = new Buffer(req.body.songBody.replace(/^data:audio\/\w+;base64,/, ""), 'base64');

  // bucketName var below crates a "folder" for each user
  var bucketName = 'samirmouied5859/' + req.body.userEmail;
  var params = {
      Bucket: bucketName
    , Key: req.body.songName
    , Body: buf
    , ContentType: 'audio/mp3' + req.body.songExtension
    , ACL: 'public-read'
  };
  console.log("this is the req.body.songExtension ");
  console.log(req.body.songExtension);

  s3.upload(params, function (err, data) {
    console.log('this is the data.Location ');
    console.log(data.Location);
    if (err) {return res.status(500).send(err);}


    res.json(data);



  });
}

exports.deleteSong = function (req, res) {
    console.log(req.body.song);
	var songName = req.body.song.songName;
  console.log(req.body.song);
	songName = songName[songName.length - 1];

	var params = {
	  Bucket: req.body.song.songUrl,
	  Key: songName
	};

	s3.deleteObject(params, function(err, data) {
	  if (err) return res.status(500).send(err.stack); //(err, err.stack);

	  //Remove from user song array
    User.findByIdAndUpdate(req.params.user_id , { $pop : { songs: req.body } } , ( err , response) => {
      console.log('the req.params.user_id is ');
      console.log(req.params.user_id );

      console.log('the req.body is');
      console.log(req.body);
      if ( err ) {
        console.log('it can not pop');
        return res.status( 500 ).json( err );
      }
      else {
        console.log('the song is Deleted');
        return res.status( 200 ).json( response )
      }

    } )
	});
}
