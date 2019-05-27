import express from 'express';

const router = express.Router();

const url = '/person';

/* Persons routes */
router.get(url);
router.get(`${url}/:id`);
router.get('/person-by-name/:name');
router.post(url);
router.post(`${url}/many`);
router.put(`${url}/:id`);
router.delete(`${url}/:id`);

/* Friend Routes */
router.get(`${url}/:id/friend`);
router.get(`${url}/:id/friend/:friend_id`);
router.put('/update-friend');
router.get('/most-popular-friend');
router.get('/popular-tag');
router.get('/find-friend');
router.get('/extract-unique-friends/:collection');
router.get('/find-unique-friends/:collection');
router.get('/find-unique-friends/:collection');
router.put('/add-color-field-to-collection');

//Extract five records
router.post('/extract');