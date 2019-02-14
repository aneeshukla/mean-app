const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');  //getting the post model

const app = express();

mongoose.connect("mongodb+srv://aneesh:eU2BPdw8ShnPWk6E@cluster0-itlw5.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  })

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false })); // to parse url encoded data

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});
//eU2BPdw8ShnPWk6E
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });  //need to pass in a javascript object that constains the data
  console.log(post);
  post.save();
  res.status(201).json({
    message: "Post added successfully!"
  });  //everything ok and a new resource was created
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then((docs)=>{
    res.status(200).json({  //everything ok
      message: 'Posts fetched successfully',
      posts: docs
    });
  });
});

app.delete('/api/posts/:id', (req, res, next) =>{
  Post.deleteOne({ _id: req.params.id })
  .then(result=>{
    console.log(result);
    res.json({message: "Post deleted!"});
  });
});

module.exports = app;
