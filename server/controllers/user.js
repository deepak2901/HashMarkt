const User = require('../model/User');



exports.getUsers = async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user details' });
    }
  };

// Get the user details by id
exports.getUserById = async (req, res) => {
    try {
      const id = req.params.id; // Access id from query parameter
      const user = await User.findById(id);
      
      if (user) {
        console.log(user);
        res.send(user);
      } else {
        res.send('No such user');
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user details' });
    }
  };
  

// Get the cart details of the user by id
exports.getUserCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.cart_items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user cart' });
  }
};

// Add a product to the cart of the user by id
exports.addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.cart_items.push(req.body.productId);
    await user.save();
    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart' });
  }
};

// Delete a product from the cart of the user by id
exports.removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const index = user.cart_items.indexOf(req.body.productId);
    if (index > -1) {
      user.cart_items.splice(index, 1);
      await user.save();
      res.json({ message: 'Product removed from cart successfully' });
    } else {
      res.status(404).json({ message: 'Product not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart' });
  }
};

// Get the favorite products of the user by id
exports.getUserFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user favorites' });
  }
};

// Add a product to the favorites of the user by id
exports.addToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.favorites.push(req.body.productId);
    await user.save();
    res.json({ message: 'Product added to favorites successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to favorites' });
  }
};

// Delete a product from the favorites of the user by id
exports.removeFromFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const index = user.favorites.indexOf(req.body.productId);
    if (index > -1) {
      user.favorites.splice(index, 1);
      await user.save();
      res.json({ message: 'Product removed from favorites successfully' });
    } else {
      res.status(404).json({ message: 'Product not found in favorites' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from favorites' });
  }
};
