const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  "id": {
    "type": "integer"
  },
  "title": {
    "type": "string"
  },
  "price": {
    "type": "number"
  },
  "description": {
    "type": "string"
  },
  "category": {
    "type": "string"
  },
  "image": {
    "type": "string",
    "format": "uri"
  },
  "rating": {
    "type": "object",
    "properties": {
      "rate": {
        "type": "number"
      },
      "count": {
        "type": "integer"
      }
    },
    "required": ["rate", "count"]
  },

  "required": ["id", "title", "price", "description", "category", "image", "rating"]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
