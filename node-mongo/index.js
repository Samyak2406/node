const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = "conFusion";

mongoClient.connect(url, (err, client) => {//Create a client
    assert.equal(err,null);//Check if theres no error
    console.log("Client connected to server");

    const db = client.db(dbName);//Connect client to Data Base
    const collection = db.collection("direction");//Collection is a grouping of mongodb documents

    collection.insertOne({"name":"Sam"},(err,result)=>{
        assert.equal(err,null);
        console.log(result.ops);
        collection.find({}).toArray((err, values)=>{
            assert.equal(err,null);
            console.log(values);

            db.dropCollection("direction",(err,val) =>{
                assert.equal(err,null);
                client.close(); 
            });
        });
    });
});