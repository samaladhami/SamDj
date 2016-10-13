const User = require('./User');


module.exports = {
    postUser(req, res) {
        new User(req.body).save((err, response) => {
            if (err) {
                return res.status(500), json(err)
            }
            return res.status(200).json(response)
        });
    },
    getUser(req, res) {
        return User.find()
            .exac((err, response) => {
                if (err) {
                    return res.status(500).json(err)
                }
                return res.status(200).json(response)
            })
    }
}

// app.get( '/api/user' , (req,res) => {
// 	if(req.user) {
// 		User.find( req.user, function( err, user ) {
// 			if( err ) {
// 				User.create( req.user, function( error, createdUser ) {
// 					if( error ) { return res.status(500).json(error); }
// 					return res.status(200).json(createdUser);
// 				} );
// 			}
// 			return res.status(200).json(req.user);
// 		} );
// 	}
// 	return res.json( req.user );
// });
