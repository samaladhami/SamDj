const Songs = require('./Songs');
const User = require('../User/User');

module.exports ={

  getSongs(req , res) {
    console.log(1);
    User.findById(req.params.user_id , (err , response) => {

      if (err) {
        console.log('err');
        return res.status( 500 ).json( err )
      }
      else {
        console.log('it find it');
        return res.status( 200 ).json( response.songs );
      }

    } )
  }

  ,postSongs( req , res ) {
    console.log(1);

    User.findByIdAndUpdate(req.params.user_id , { $push : { songs: req.body } } , ( err , response) => {
      if ( err ) {
        console.log('it can not push');
        return res.status( 500 ).json( err );
      }
      else {
        console.log('Added');
        return res.status( 500 ).json( response )
      }

    } )

  }
 }
