const mongoose = require('mongoose');
const directions = require('./models/direction');
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("Connected");

    directions.create({
        name: 'mumbai',
        description: 'MegaCity'
    })
        .then((direction) => {
            return directions.findByIdAndUpdate(direction._id, {
                $set: { description: 'XL City' },
            }, { new: true },// Pass the new updated value
            ).exec();
        },
        )
        .then((direction) => {
            direction.comments.push({
                rating: 5,
                author: 'Samyak',
                comment: 'City'
            });
            return direction.save();
        })
        .then((direction) => {
            console.log(direction);
            return directions.remove({});
        })
        .then((_) => {
            return mongoose.connection.close();
        })
        .catch((_) => { });
});