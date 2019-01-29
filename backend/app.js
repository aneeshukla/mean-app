const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header");
    next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [{
    id: 'addffggrg',
    title: 'first server side post',
    content: 'This is coming from the server'
  }, {
    id: 'zxfvsdgdfh',
    title: '2nd server side post',
    content: 'This is coming from the server'
  }];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
