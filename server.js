const express = require('express')
const restaurants = require('./mock-data/restaurants') // importing data from restaurants.js

const app = express()
const port = 3000

app.get('/api/restaurants/', (req, res) => {
  res.json(restaurants);
})

// get single restaurant by Id
app.get('/api/restaurants/:resId', (req, res) => {
     const id = req.params.resId; 
     const restaurant = restaurants.find((res) => res.data.data.id === id);
     res.json(restaurant);

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


