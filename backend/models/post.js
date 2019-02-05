const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required:true }
});

module.exports = mongoose.model('Post', postSchema); //(name of the model (first alpha should be caps), schema that you want to use)

