const express = require("express");
const router = express.Router();

const {signin, logout} = require('../controllers/auth');
const {signup} = require('../controllers/auth')

router.post('/signin',signin);
router.post('/signup', signup);
router.get('/signup', signup)
router.post('/logout', logout)


module.exports = router;