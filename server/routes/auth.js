const express = require("express");
const router = express.Router();

const {signin, logout} = require('../controllers/auth');
const {signup} = require('../controllers/auth')

router.post('/signin',signin);
router.post('/signup', signup)
router.get('/logout', logout)

module.exports = router;