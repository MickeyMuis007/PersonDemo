const express = require('express');

const controller = require('../controllers/person.controller');

const router = express.Router();

const url = "/person";

router.get(url, controller.getPersons);

router.get(`${url}/:id`, controller.getPerson);

router.get('/person-by-name/:name', controller.getPersonByName);

router.post(url, controller.addPerson);

router.put(`${url}/:id`, controller.updatePerson);

router.delete(`${url}/:id`, controller.deletePerson);

// Friend Routes
router.get(`${url}/:id/friend`);            // Get all friends for person
router.get(`${url}/:id/friend/:friend_id`); // Get friend by id
router.put('/update-friend', controller.updateFriend); // Update Friend
router.get('/most-popular-friend', controller.findMostPopularFriend);
router.get('/males', controller.findMostPopularTagMales);
router.get('/females', controller.findMostPopularTagFemales);
router.get('/find-friend', controller.findFriend);
router.get('/extract-unique-friends/:collection', controller.extractUniqueFriends);
router.get('/find-unique-friends/:collection', controller.findUniqueFriends);
router.get('/add-random-color/:collection', controller.addRandomColorToCollection);

module.exports = router;