  "use strict";
  const {MongoClient} = require("mongodb");
  //e' come utilizzare la linea che viene sotto:
  //const MongoClient = require("mongodb").MongoClient;
  const MONGODB_URI = "mongodb://localhost:27017/tweeter";

  MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
    // => {
    //   if (err) {
    //     return callback(err);
    //   }
    //   callback(null, tweets);
    // });
  }

  getTweets((err, tweets) => {
  if (err) throw err;

  console.log("Logging each tweet:");
  for (let tweet of tweets) {
    console.log(tweet);
  }



  // console.log(`Connected to mongodb: ${MONGODB_URI}`);
  //
  // db.collection("tweets").find({}, (err, results) => {
  //   if (err) throw err;
  //
  //   console.log("for each item yielded by the cursor:");
  //   results.each((err, item) => console.log("  ", item));

    db.close();
  });
  });
