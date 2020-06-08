const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var config=require('./config');


const app = express();

/*mongoose.connect(config.dbUrl);
mongoose.connection.on("connected",()=>{
  console.log('connected to mongo database');
});

mongoose.connection.on("error",err=>{
console.log('Error at amongo db'+ err);
});

const port=3000;*/

// Only include useMongoClient only if your mongoose version is < 5.0.0
/*mongoose.connect('mongodb://localhost:27017/cakeStore', {useNewUrlParser: true})
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})*/


/*mongoose.connect('mongodb://127.0.0.1:27017/cakeStore', {useNewUrlParser: true}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});*/
/*const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})*/

// Only include useMongoClient only if your mongoose version is < 5.0.0
mongoose.connect('mongodb://localhost/cakeStore', {useNewUrlParser: true}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');
const mainRoutes = require('./routes/main');
//const sellerRoutes = require('./routes/seller');

app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
//app.use('/api/seller', sellerRoutes);

app.listen(3030, err => {
  console.log('Magic happens on port awesome 3030');
});
