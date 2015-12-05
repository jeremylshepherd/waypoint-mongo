var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var arg = parseInt(process.argv[2], 10);
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      var parrots = db.collection('parrots');
      if(err){
          console.error(err);
          process.exit(1);
      }
    
        parrots.find({
          age: {
              $gt: +arg
          }
        }).toArray(function(err, documents) {
            if(err){
                console.error(err);
            }else{
              console.log(documents);
            }
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
      parrots.find({
        age: {
          $gt: +age
        }
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })

────────────────────────────────────────────────────────────────────────────────

*/    