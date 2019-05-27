"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersonController {
    constructor() {
        this.getPersons = (req, res) => {
            console.log("Get Persons Controller");
            res.send("Get Persons Controller");
        };
        this.getPerson = (req, res) => {
            console.log("Get Person Controller");
            res.send("Get Person Controller");
        };
        this.getPersonByName = (req, res) => {
            console.log("Get Person By Name Controller");
            res.send("Get Person By Name Controller");
        };
        this.addPerson = (req, res) => {
            console.log("Add Person");
            res.send("Add Person");
        };
        this.addManyPeople = (req, res) => {
            console.log("Add Many People");
            res.send("Add Many People");
        };
        this.updatePerson = (req, res) => {
            console.log("Update Person");
            res.send("Update Person");
        };
        this.deletePerson = (req, res) => {
            console.log("Delete Person");
            res.send("Delete Person");
        };
        /* Friend Controller Methods */
        this.findMostPopularFriend = (req, res) => {
            console.log("Person Controller -> Find Most Popular Friend");
            res.send("Find most popular friend controller");
        };
        this.findMostPopularTags = (req, res) => {
            console.log("Person Controller -> Find Most Popular Tag");
            res.send("Find most popular tag controller");
        };
        this.updateFriend = (req, res) => {
            console.log("Person Controller -> Update Friend");
            res.send("Find most popular friend controller");
        };
        this.findFriend = (req, res) => {
            console.log("Person Controller -> Find Friend");
            res.send("Find friend");
        };
        this.extractUniqueFriends = (req, res) => {
            console.log("Person Controller -> extractUniqueFriends");
            res.send("extractUniqueFriends");
        };
        this.findUniqueFriends = (req, res) => {
            console.log("Person Controller -> findUniqueFriends");
            res.send("findUniqueFriends");
        };
        this.addRandomColorToCollection = (req, res) => {
            console.log("Person Controller -> addRandomColorToCollection");
            res.send("addRandomColorToCollection");
        };
        this.extractFiveRecords = (req, res) => {
            console.log("Person Controller -> extractFiveRecords");
            res.send("extractFiveRecords");
        };
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map