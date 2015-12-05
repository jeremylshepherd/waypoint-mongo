var mongo = require("mongodb").MongoClient;
var arg = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

    mongo.connect(url, function(err, db){
        var collection = db.collection('parrots');
        if(err){
               console.error(err);
           }
           collection.count({
               age: { 
                   $gt : +arg 
                   
               }
           }, function(err, data){
                if(err){
                    console.error(err);
                }
                console.log(data);
                db.close();
           });
    });

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var mongo = require('mongodb').MongoClient
    var age = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.count({
        age: {
          $gt: +age
        }
      }, function(err, count) {
        if (err) throw err
        console.log(count)
        db.close()
      })
    })

────────────────────────────────────────────────────────────────────────────────
*/