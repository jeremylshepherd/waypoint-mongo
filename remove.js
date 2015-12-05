var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

    mongo.connect(url, function(err, db){
       var collection = db.collection(process.argv[3]);
       if(err){
           console.error(err);
       }
       collection.remove({
           _id: process.argv[4]
       }, function(err, data){
            if(err){
                console.error(err);
            }
       });
       
       db.close();
    });
    
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var mongo = require('mongodb').MongoClient
    
    var url = 'mongodb://localhost:27017/' + process.argv[2]
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection(process.argv[3])
      collection.remove({
        _id: process.argv[4]
      }, function(err) {
        if (err) throw err
        db.close()
      })
    })

────────────────────────────────────────────────────────────────────────────────
*/