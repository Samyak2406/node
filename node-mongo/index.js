const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const admin = require('./operation');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

mongoClient.connect(url).
    then((client) => {
        // assert.equal(err, null);
        console.log("Connected To Server");
        const db = client.db(dbName);
        admin.insertDocument(db, { name: "Samyak", surname: "vora" }, 'direction')
            .then((result) => {
                console.log("-----> Inserted");
                return admin.findDocument(db, 'direction');
            })
            .then((result) => {
                console.log("-----> Found");
                return admin.updateDocument(db, { name: "Samyak" }, { surname: "Vora" }, 'direction');
            })
            .then((result) => {
                console.log("-----> Updated");
                return admin.findDocument(db, 'direction');
            })
            .then((result) => {
                console.log("-----> Updated*");
                return admin.removeDocument(db, { name: "Samyak", surname: "Vora" }, 'direction');
            })
            .then((result) => {
                console.log("-----> Removed");
                return db.dropCollection('direction');
            })
            .then((result) => {
                console.log("-----> Dropped");
                client.close();
            }).catch((err)=>console.log(err));
    }).catch((err)=>console.log(err));