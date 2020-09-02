const assert = require('assert');
const { callbackify } = require('util');

exports.insertDocuments = (db, document, collection, callback) => {
    const col = db.collection(collection);
    col.insert(document, (err, result) =>{
        console.log(err);
        assert.equal(err,null);
        console.log("Inserted");
        callback(result);//passes the value in callback
    });
};

exports.findDocuments = (db, collection, callback) => {
    const col = db.collection(collection);
    col.find({}).toArray((err,documents) => {
        assert.equal(err,null);
        callback(documents);
    });
};

exports.removeDocuments = (db, document, collection, callback) => {
    const col = db.collection(collection);
    col.deleteOne(document, (err, result)=>{
        assert.equal(err,null);
        console.log(result);
        callback(result);
    });
};

exports.updateDocuments = (db, document, update, collection, callback) => {
    const col = db.collection(collection);
    col.updateOne(document, {$set: update}, null, (err,result)=>{
        assert.equal(err,null);
        console.log(result);
        callback(result);
    });
};