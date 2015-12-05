var mongo = require("mongodb").MongoClient;
var arg = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

    mongo.connect(url, function(err, db){
        var prices = db.collection('prices');
        if(err){
            console.error(err);
        }
        
        prices.aggregate([
            { $match: { size: arg }},
            {$group: {
                _id: 'total',
                total: {
                    $avg: '$price'
                }
            }}
            ]).toArray(function(err, data){
                var numData = Number(data[0].total).toFixed(2);
                if(err){
                    console.error(err);
                }
                console.log(numData);
                db.close();
            });
    });

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var mongo = require('mongodb').MongoClient
    var size = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
      prices.aggregate([
        { $match: {
          size: size
        }}
      , { $group: {
          _id: 'total'
        , total: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        var o = results[0]
        console.log(Number(o.total).toFixed(2))
        db.close()
      })
    })

────────────────────────────────────────────────────────────────────────────────
*/