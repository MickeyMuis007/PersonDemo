import mongodb, { ObjectId } from "mongodb";
import * as database from "../util/database";

class Person {

    public static find(query: any) {
        console.log(`Delete person`);
        const db = database.getDb();

        let projection = {};

        if (query) {
            // Changing values to
            projection = Object.keys(query).reduce((acc: any, key) => { acc[key] = +query[key]; return acc; }, {});
            console.log(projection);
        }

        return db.collection("persons")
               .find({}, {projection})
               .toArray()
               .then((people: any) => {
                   console.log("Successfully found people");
                   return people;
               });

    }

    public static findById(id: number) {
        console.log(`Find person by id`);
        if (!ObjectId.isValid(id)) {
            return new Promise((resolve) => {
                resolve();
            });
        }
        const db = database.getDb();
        return db.collection("persons")
            .findOne({
                $or: [
                    {_id: id},
                    {_id: new ObjectId(id)}
                ]
            })
            .then((person: any) => {
                console.log(`Successfully found a person`);
                return person;
            });
    }

    public static findByName(name: string) {
        console.log("Find person by name");
        const db = database.getDb();
        return db.collection("persons")
            .findOne({ name })
            .then((person: any) => {
        console.log("\t- Successfully found person");
        return person;
      });
    }

    public static findMostPopularFriend() {
        console.log("Find Most popular friend");
        const db = database.getDb();
        return db.collection("persons")
          .aggregate([
            { $unwind: "$friends" },
            { $project: { name: 1, friend_name: "$friends.name" } },
            {
              $group: {
                _id: { friend_name: "$friend_name" },
                friend_name: { $first: "$friend_name" },
                main_friend: { $first: "$name" },
                total: { $sum: 1 }
              }
            },
            { $sort: { total: -1 } },
            { $limit: 5 }
          ]).toArray();
      }

      public static findMostPopularTags(query: any) {
        console.log("Find most popluar gender tags");

        const db = database.getDb();
        return db.collection("persons")
          .aggregate([
            { $match: query },
            { $unwind: "$tags" },
            // Group by tags, because we want to get the total number for each tag
            {
              $group: {
                _id: { tags: "$tags" },
                total: { $sum: 1 },
                tag_name: {$first: "$tags"},
                gender: { $first: "$gender" }
              }
            },
            // Group by total, put every tag with same total into one array
            {
              $group: {
                  _id: {total: "$total"},
                  gender: {$first: "$gender"},
                  total: {$first: "$total"},
                  docs: {$push: {
                    _id: "$_id",
                    tag_name: "$tag_name",
                    gender: "$gender",
                    }
                }
              }
            },
            { $sort: { total: -1 } },
            {$limit: 1},
            {$unwind: "$docs"},
            {$project: {tag_Name: "$docs.tag_name", gender: 1, total: 1}}

          ]).toArray();
      }

      public static findFriend(query: any) {
        console.log("Find works! ", query);
        const db = database.getDb();
        return db.collection("persons")
          .findOne({ "name": query.mainName, "friends.name": query.friend });
      }

      public static extractUniqueFriends(collection: any) {
        console.log("Extract Unique friends!");
        const db = database.getDb();
        return db.collection("persons")
        .aggregate([
          { $unwind: "$friends" },
          { $project: { friend_name: "$friends.name" } },
          {
            $group: {
              _id: "$friend_name",
              friend_name: { $first: "$friend_name" }
            }
          },
          { $sort: { friend_name: 1}},
          { $out: collection }
        ]).toArray();
      }

      public static extractFiveRecords(body: any) {
        console.log("Extract Five People!");
        const db = database.getDb();
        return db.collection(body.fromCollection)
        .aggregate([
          {$limit: 5},
          { $out: body.toCollection }
        ]).toArray();
      }

      public static findUniqueFriends(collection: any, query: any) {
        let filter = {};
        if (query) {
          // Changing values to
          filter = Object.keys(query).reduce((acc: any, key) => { acc[key] = +query[key]; return acc; }, {});
          console.log(filter);
        }
        const db = database.getDb();
        return db.collection(collection)
          .find({}, filter).toArray();
      }

    public name: string;
    public gender: string;
    public eyeColor: string;
    public company: string;
    public email: string;
    public tags: string[];
    public friends: string[];

    // creating a constructor
    constructor(person: any) {
        if (!person) {
            person = {};
        }

        this.name = person.name;
        this.gender = person.gender;
        this.eyeColor = person.eyeColor;
        this.company = person.company;
        this.email = person.email;
        this.tags = person.tags;
        this.friends = person.tags;

    }

}
