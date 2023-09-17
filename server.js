const express = require("express");
const cors = require("cors");
const restaurants = require("./mock-data/restaurants"); // importing data from restaurants.js

const app = express();
app.use(cors());
const port = 3000;

app.get("/api/restaurants/", (req, res) => {
  res.json(restaurants);
});

// get single restaurant by Id
app.get("/api/restaurants/:resId", (req, res) => {
  const id = req.params.resId;
  const restaurant = restaurants.find((res) => res.id === id);
  res.json(restaurant);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
