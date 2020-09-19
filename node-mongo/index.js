const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

mongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log("Connected To Server");
    const db = client.db(dbName);
    const collection = db.collection('direction');
    collection.insertOne({'name':'Samyak','surname': 'Vora'},(err, result)=>{
        assert.equal(err,null);
        console.log(result.ops);
        collection.find({}).toArray((err, values)=>{
            assert.equal(err,null);
            console.log(values);
            db.dropCollection('direction',(err,status)=>{
                assert.equal(err,null);
                client.close();
            });
        });
    });
});

