const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const isAuth = require("./middleware/auth");
const app = express();
const port = process.env.PORT||5000;
app.use(express.json());
app.use(cors());
app.use(isAuth);
const product = require("./Routes/products");
const user = require("./Routes/users");
const order = require("./Routes/orders");

require('dotenv').config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));


app.use("/product", product);
app.use("/users", user);
app.use("/order", order);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
