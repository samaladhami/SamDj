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
