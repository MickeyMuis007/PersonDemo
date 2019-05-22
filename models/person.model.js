const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

const ObjectId = mongodb.ObjectId;

class Person {
  constructor(person) {
    if (!person)
      person = {};
    this.name = person.name || '';
    this.gender = person.gender || '';
    this.eyeColor = person.eyeColor || '';
    this.company = person.company || '';
    this.email = person.email || '';
    this.tags = person.tags || [];
    this.friends = person.friends || [];
  }

  add() {
    console.log('Add person');
    const db = getDb();
    return db.collection('persons')
      .insertOne(this)
      .then(result => {
        console.log('\t- Successfully added person');
        console.log(result.insertedId);
        return db.collection('persons').findOne({ _id: result.insertedId });
      }).then(person => {
        return person;
      });
  }

  update() {
    console.log('Update person');
  }

  static deleteById(id) {
    console.log('Delete person');
  }

  static find() {
    console.log('Find people');
    const db = getDb();
    return db.collection('persons')
      .find()
      .toArray()
      .then(people => {
        console.log('\t- Successfully found people');
        return people;
      });
  }

  static findById(id) {
    console.log('Find person by id');
    if (!ObjectId.isValid(id)) {
      return new Promise((resolve) => {
        resolve(null);
      });
    }
    const db = getDb();
    return db.collection('persons')
      .findOne({
        $or: [
          { _id: id },
          { _id: new ObjectId(id) }
        ]
      })
      .then(person => {
        console.log('\t- Successfully found person');
        return person;
      })
  }

  static findByName(name) {
    console.log('Find person by name');
    const db = getDb();
    return db.collection('persons')
      .findOne({ name: name })
      .then(person => {
        console.log('\t- Successfully found person');
        return person;
      });
  }

  static findMostPopularFriend() {
    console.log('Find Most popular friend');
    const db = getDb();
    return db.collection('persons')
      .aggregate([
        { $unwind: '$friends'},
        { $project: { name: 1, friend_name: '$friends.name' }},
        { $group: { 
          _id: { friend_name: '$friend_name'},
          friend_name: {$first: "$friend_name"},
          main_friend: {$first: '$name' },
          total: {$sum: 1}
        }},
        { $sort: { total: -1}},
        { $limit: 5 }
      ]).toArray();
  }

  static findMostPopularTagForMales() {
    console.log('Find most popular male tags');
    const db = getDb();
    return db.collection('persons')
          .aggregate([
            {$unwind: "$tags"},
            {$project: {tags: 1, gender: 1, name: 1}},
            {$match: {gender: "male"}},
            {$group: {
                _id: {tags: "$tags"}, 
                totalTags: {$sum: 1},
                gender: {$first: "$gender"}
              }
          },
          {$sort: {totalTags: -1}}
          
          ]).toArray();
  }

  static findMostPopularTagForFemales() {
    console.log('Find most popluar female tags');

    const db = getDb();
    return db.collection('persons')
          .aggregate([
            {$unwind: "$tags"},
            {$project: {tags: 1, gender: 1, name: 1}},
            {$match: {gender: "female"}},
            {$group: {
                _id: {tags: "$tags"}, 
                totalTags: {$sum: 1},
                gender: {$first: "$gender"}
              }
          },
          {$sort: {totalTags: -1}}
          
          ]).toArray();
  }

  static updateFriend(fromBody) {
    console.log('Update friend');

    const db = getDb();
    return db.collection('persons')
          .updateOne({name: fromBody.mainName, "friends.name": fromBody.friend}, {$set: {"friends.$.name": fromBody.updateName}})
  }


  static findFriend(query){
    console.log('Find works! ', query);
    const db = getDb();
    return db.collection('persons')
          .findOne({name: query.mainName, "friends.name": query.friend})
  }
}

module.exports = Person;