"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_controller_1 = require("../controller/person.controller");
const router = express_1.default.Router();
exports.PersonRouter = router;
const controller = new person_controller_1.PersonController();
const url = "/person";
/* Persons routes */
router.get(url, controller.getPersons);
router.get(`${url}/:id`, controller.getPerson);
router.get("/person-by-name/:name", controller.getPersonByName);
router.post(url, controller.addPerson);
router.post(`${url}/many`, controller.addManyPeople);
router.put(`${url}/:id`, controller.updatePerson);
router.delete(`${url}/:id`, controller.deletePerson);
/* Friend Routes */
router.get(`${url}/:id/friend`);
router.get(`${url}/:id/friend/:friend_id`);
router.put("/update-friend", controller.updateFriend);
router.get("/most-popular-friend", controller.findMostPopularFriend);
router.get("/popular-tag", controller.findMostPopularTags);
router.get("/find-friend", controller.findFriend);
router.get("/extract-unique-friends/:collection", controller.extractUniqueFriends);
router.get("/find-unique-friends/:collection", controller.findUniqueFriends);
router.put("/add-color-field-to-collection", controller.addRandomColorToCollection);
// Extract five records
router.post("/extract", controller.extractFiveRecords);
//# sourceMappingURL=person.router.js.map