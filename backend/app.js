const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!"
  });  //everything ok and a new resource was created
});

app.get('/api/posts', (req, res, next) => {
  const posts = [{
    id: 'addffggrg',
    title: 'first server side post',
    content: 'This is coming from the server'
  }, {
    id: 'zxfvsdgdfh',
    title: '2nd server side post',
    content: 'This is coming from the server'
  }];

  res.status(200).json({  //everything ok
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
