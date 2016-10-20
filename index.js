const express = require('express');
const multiparty = require('connect-multiparty');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const config = require('./config.js');
const User = require('./User/User');
const app = express();
const port = 3000;

app.use(session({
    secret: config.mySecrets.secret
}));
app.use(passport.initialize());
app.use(passport.session());


// Expanding server capacity
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));






const mongoUri = 'mongodb://localhost:27017/songs';

app.use(express.static(__dirname + '/public'));


mongoose.connect(mongoUri, function(err) {
    if (err) {
        console.log(err)
    }
    return;
})

mongoose.connection.once('open', () => console.log(`Connected to MongoDB at ${ mongoUri }`))

app.use(cors());




passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.cbURL
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
}))

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});





app.get('/api/users' , (req , res) => {
  User.find({} , (err , response) => {
    if (err) {
      return res.status( 500 ).json( err )
    }
    else {
      return res.status( 200 ).json( response );
    }
  })
} )

app.get('/api/user', (req, res) => {
    if (req.user) {
        User.findOne({
            id: req.user.id
        }, function(err, user) {
            if (err) {
                return res.send(err);
            } else if (!user) {
                User.create({
                    name: req.user.displayName,
                    id: req.user.id
                }, function(error, createdUser) {
                    if (error) {

                        return res.status(500).json(error);
                    } else {
                        console.log(createdUser);
                        return res.status(200).json(createdUser);
                    }
                });
            } else if (user) {
                res.status(200).json(user);
            }
        });
    } else {
        return res.json(req.user);
    }
});

require('./Songs/songsRoutes')( app );



const uploadCtrl = require('./uploadCtrl.js');
app.post('/api/newSong', uploadCtrl.saveSong);
app.delete('/api/deleteSong/:user_id' , uploadCtrl.deleteSong)







app.listen(port, () => console.log(`listening on ${ port }`))
