const mongoose = require('mongoose');
const directions = require('./models/direction');
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);
connect.then((db)=>{

    var dir = directions({
        name: 'mumbai',
        description: 'MegaCity'
    });

    return dir.save()
    
})
.then((rsave)=>{
    console.log(rsave);
    return directions.find({});
})
.then((_)=>{
    console.log(_);
    return directions.remove({});
})
.then((_)=>{
    return mongoose.connection.close();
})
.catch((_)=>{});