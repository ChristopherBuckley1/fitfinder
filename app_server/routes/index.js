const express = require('express');
const router = express.Router();


/* GET home page. */
const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.home);
router.get('/login', ctrlLocations.logIn);
router.get('/register', ctrlLocations.register);
/* Other pages */
router.get('/about', ctrlOthers.register);
module.exports = router;
