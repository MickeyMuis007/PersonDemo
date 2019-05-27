import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

let _db:any;

const mongoConnect = ((callback:any) => {
  MongoClient.connect('mongodb://localhost/persons')
    .then(client => {
      console.log('Connect to DB!');
      _db = client.db();
      callback();
    }).catch(err => console.log(err));
});

const getDb = () => {
  if (_db)
    return _db;
}

export { getDb as db }
export { mongoConnect }