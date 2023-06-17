const Product = require("../model/Product");

const productsData = [
  // Array of initial product data
];

const populateDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing products from the database

    const createdProducts = await Product.create(productsData);

    console.log("Products populated successfully:", createdProducts);
    process.exit(0); // Exit the script after populating the database
  } catch (err) {
    console.error("Error while populating products:", err);
    process.exit(1); // Exit the script with an error status code
  }
};

populateDatabase();
