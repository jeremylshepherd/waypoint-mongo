
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.


3) Instructions for CONNECT:
    To connect to the database, one can use something like this:
    
        var mongo = require('mongodb').MongoClient
        mongo.connect(url, function(err, db) {
          // db gives access to the database
        })
    
    To get a collection, one can use db.collection('<collection name>').
    
    To find a document or documents, one needs to call find() on the collection.
    
    Find is a little bit different than what we are used to seeing.
    
    Keep in mind, process.argv is an array of strings. To convert to an integer, you could use parseInt()
    
    Here is an example:
    
        collection.find({
          name: 'foo'
        }).toArray(function(err, documents) {
        
        })
    
    If your program does not finish executing, you may have forgotten to
    close the db. That can be done by calling db.close() after you
    have finished.