const mongoose = require('mongoose');
const schema = mongoose.Schema;

var commentSchema = new schema({
    rating:{
        type: Number,
        min:1,
        max:5,
        required:true,
    },
    comment: {
        type: String,
        required:true,
    },
    author: {
        type: String,
        required:true,
    }
},{
    timestamps: true,
});


var directionSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
},{
    timestamps: true
});

var directions = mongoose.model('Directions',directionSchema);
module.exports = directions;