import mongodb, { ObjectId } from "mongodb";
import * as database from "../../util/database";
import { Person } from "../person.model";

export class PersonView {
    public id: any;
    public name: string;
    public gender: string;
    public friends: any;
    public tags: any;

    constructor(person: any) {
        this.id = person._id;
        this.name = person.name;
        this.gender = person.gender;
        this.friends = person.friends;
        this.tags = person.tags;
    }

}

function viewFriends() {
    console.log("This is how we view each person and their friends");
    const db = database.getDb();

    return db.collection("persons")
           .aggregate([
                { $project: {_id: 1, name: 1, gender: 1, friends: 1, tags: 1} }

           ]).toArray();
}
