import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let db: any;

export const mongoConnect = ((callback: any) => {
  MongoClient.connect("mongodb://localhost/persons")
    .then((client) => {
      console.log("Connect to DB!");
      db = client.db();
      callback();
    }).catch((err) => console.log(err));
});

export const getDb = () => {
  if (db) {
    return db;
  }
};
