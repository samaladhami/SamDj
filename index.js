const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const mongoUri = 'mongodb://localhost:27017/songs';

app.use(express.static(__dirname + '/public'));

app.use( json() )

mongoose.connect(mongoUri)
mongoose.connection.once('open' , () => console.log(`Connected to MongoDB at ${ mongoUri }`))

app.use( cors() );




app.listen(port ,() => console.log(`listening on ${port}`) )
