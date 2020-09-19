const assert = require('assert');

exports.insertDocument = (db, document, collection,callback)=>{
    const Collection = db.collection(collection);
    Collection.insert(document,(err,result)=>{
        assert.equal(err,null);
        console.log(result.result);
        callback(result);
    });
};

exports.updateDocument = (db, document, updatedValue, collection,callback)=>{
    const Collection = db.collection(collection);
    Collection.updateOne(document,{$set: updatedValue},null,(err,result)=>{
        assert.equal(err,null);
        console.log(result);
        callback(result);
    });
};

exports.findDocument = (db, collection,callback)=>{
    const Collection = db.collection(collection);
    Collection.find({}).toArray((err, document)=>{
        assert.equal(err, null);
        console.log(document);
        callback(document);
    });
    
};

exports.removeDocument = (db, document, collection,callback)=>{
    const Collection = db.collection(collection);
    Collection.deleteOne(document,(err, result)=>{
        assert.equal(err,null);
        console.log(result);
        callback(result);
    });
    
};