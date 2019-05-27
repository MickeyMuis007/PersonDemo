import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

let _db:any;

export const mongoConnect = ((callback:any) => {
  MongoClient.connect('mongodb://localhost/persons')
    .then(client => {
      console.log('Connect to DB!');
      _db = client.db();
      callback();
    }).catch(err => console.log(err));
});

export const getDb = () => {
  if (_db)
    return _db;
}
