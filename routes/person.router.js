// All our routes are handled here
const express = require('express');

const controller = require('../controllers/person.controller');

const router = express.Router();

export const url = "/person";

router.get(url, controller.getPersons);

router.get(`${url}/:id`, controller.getPerson);

router.get('/person-by-name/:name', controller.getPersonByName);

router.post(url, controller.addPerson);
router.post(`${url}/many`, controller.addManyPeople);

router.put(`${url}/:id`, controller.updatePerson);

router.delete(`${url}/:id`, controller.deletePerson);

// Friend Routes
router.get(`${url}/:id/friend`);            // Get all friends for person
router.get(`${url}/:id/friend/:friend_id`); // Get friend by id
router.put('/update-friend', controller.updateFriend); // Update Friend
router.get('/most-popular-friend', controller.findMostPopularFriend);
router.get('/popular-tag', controller.findMostPopularTags);
router.get('/find-friend', controller.findFriend);
router.get('/extract-unique-friends/:collection', controller.extractUniqueFriends);
router.get('/find-unique-friends/:collection', controller.findUniqueFriends);
router.put('/add-color-field-to-collection', controller.addRandomColorToCollection);
 
// Extract five records
router.post('/extract', controller.extractFiveRecords);


module.exports = router;