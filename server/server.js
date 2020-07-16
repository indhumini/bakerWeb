//This file acts as the entry point of elearning server application


//Requiring all the packages necessary and making server.JS as entry point of application
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var config=require('./config');
//const http=require("http");


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

//express application using required packages 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

/*app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader(
 "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Authorization,Accept"
   );
   res.setHeader(
   "Access-Control-Allow-Methods",
 "GET, POST, PATCH, PUT, DELETE, OPTIONS"
 );
 next(); 
 });
 
 app.post("/api/comments",(req,res,next)=>{
   const comment=new Comment({
     title:req.body.title,
     content:req.body.content
   });
   comment.save().then(createdComment=>{
     res.status(201).json({
       message:"Comment added successfully",
       commentId:createdComment._id
   });
   
   });
 });
 
 app.put("/api/comments/:id", (req, res, next) => {
   const comment = new Comment({
     _id: req.body.id,
     title: req.body.title,
     content: req.body.content
   });
   Comment.updateOne({ _id: req.params.id }, comment).then(result => {
     console.log(result);
     res.status(200).json({ message: "Update successful!" });
   });
 });
 
 app.get("/api/comments",(req,res,next)=>{
   Comment.find().then(documents=>{
     return res.status(200).json({
       message:"comments fetched successfully",
       comments:documents.map( )
    
   });
  
   });
 });
 //to delete the comments added
 app.delete("/api/comments/:id", (req, res, next) => {
   Comment.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json({ message: "Comment deleted!" });
   });
 });
*/
const userRoutes = require('./routes/account');
const mainRoutes = require('./routes/main');
const sellerRoutes = require('./routes/seller');
const productSearchRoutes = require('./routes/product-search');

//express application using Routes from this application
app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/search', productSearchRoutes);

//Setting up the port for server to run on 
app.listen(3030, err => {
  console.log('Magic happens on port awesome 3030');
});
