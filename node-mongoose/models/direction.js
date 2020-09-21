const mongoose = require('mongoose');
const schema = mongoose.Schema;

const directionSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

var directions = mongoose.model('Directions',directionSchema);
module.exports = directions;