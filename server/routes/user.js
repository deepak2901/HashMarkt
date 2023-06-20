const express = require('express');
const router = express.Router();
const {getUsers,getUserById ,getUserCart ,addToCart, removeFromCart, getUserFavorites, addToFavorites, removeFromFavorites} = require("../controllers/User");
 

router.get('/user',getUsers);
router.get('/:id',getUserById);
router.get('/:id/cart',getUserCart);
router.post('/:id/cart',addToCart);
router.delete('/:id/cart',removeFromCart);
router.get('/:id/favorites',getUserFavorites);
router.post('/:id/favorites',addToFavorites);
router.delete('/:id/favorites',removeFromFavorites);

module.exports = router;
