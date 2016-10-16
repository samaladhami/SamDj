const songsCtrl = require('./songsCtrl');

module.exports = app => {

  app.get( '/api/songs/:user_id' , songsCtrl.getSongs );
  app.post( '/api/songs/:user_id' , songsCtrl.postSongs );

}

// user_id : 5802d5fa00fca920b0ff6f66
