const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const admin = require('./operation');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

mongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log("Connected To Server");
    const db = client.db(dbName);
    admin.insertDocument(db,{name:"Samyak",surname:"vora"},'direction',(result)=>{
        console.log("-----> Inserted");
        admin.findDocument(db,'direction',(result)=>{
            console.log("-----> Found");
            admin.updateDocument(db,{name:"Samyak"},{surname:"Vora"},'direction',(result)=>{
                console.log("-----> Updated");
                admin.findDocument(db,'direction',(result)=>{
                    console.log("-----> Updated*");
                    admin.removeDocument(db,{name:"Samyak",surname:"Vora"},'direction',(result)=>{
                        console.log("-----> Removed");
                        db.dropCollection('direction',(err,result)=>{
                            assert.equal(err,null);
                            console.log("-----> Dropped");
                            client.close();
                        });
                    });
                });
            });
        });
    });
});

