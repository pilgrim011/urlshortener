//require/import the mongodb native drivers.
var mongodb = require('mongodb');

//"MongoClient" is used to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017/my_database_name';      


// Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});
