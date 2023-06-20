const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const auth = require("./routes/auth");
const product = require("./routes/product");
const user = require("./routes/user");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Routes
app.use("/api", auth);
app.use("/api/product", product);
app.use("/api/user", user);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
