const userCtrl = require('./userCtrl');

module.exports = app => {
  app.post('api/user/' , userCtrl.postUser);
  app.get('api/user/' ,  userCtrl.getUser);
}
