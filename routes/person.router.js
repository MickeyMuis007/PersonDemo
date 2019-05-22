const express = require('express');

const controller = require('../controllers/person.controller');

const router = express.Router();

const url = "/person";

router.get(url, controller.getPersons);

router.get(`${url}/:id`, controller.getPerson);

router.post(url, controller.addPerson);

router.put(`${url}/:id`, controller.updatePerson);

router.delete(`${url}/:id`, controller.deletePerson);

// Friend Routes
router.get(`${url}/:id/friend`);            // Get all friends for person
router.get(`${url}/:id/friend/:friend_id`); // Get friend by id
router.put(`${url}/:id/friend/:friend_id`); // Udate Friend
router.get('/most-popular-friend', controller.findMostPopularFriend);
router.get('/most-popular-tag-males');
router.get('/most-popular-tag-females');

module.exports = router;