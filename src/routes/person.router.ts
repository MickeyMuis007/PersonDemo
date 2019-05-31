import express from "express";
import { PersonController } from "../controller/person.controller";

const router = express.Router();
const controller = new PersonController();

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

export default router;
