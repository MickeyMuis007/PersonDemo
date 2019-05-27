import mongodb, { ObjectId } from "mongodb";
import { Person } from "../person.model";
import * as database from "../../util/database";

export class PersonView {
    public id: any;
    public name: string;
    public gender: string;
    public friends: any;

    constructor(person: any){
        this.id = person._id;
        this.name = person.name;
        this.gender = person.gender;
        this.friends = person.friends;
    }
    
}

function viewFriends() {
    console.log("This is how we view each person and their friends");
    const db = database.getDb();

    return db.collection("persons")
           .aggregate([
                { $project: {_id: 1, name: 1, gender: 1, friends: 1} }

           ]).toArray();
}
