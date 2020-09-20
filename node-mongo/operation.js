const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const Collection = db.collection(collection);
    return Collection.insert(document);
};

exports.updateDocument = (db, document, updatedValue, collection, callback) => {
    const Collection = db.collection(collection);
    return Collection.updateOne(document, { $set: updatedValue }, null);
};

exports.findDocument = (db, collection, callback) => {
    const Collection = db.collection(collection);
    return Collection.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
    const Collection = db.collection(collection);
    return Collection.deleteOne(document);
};