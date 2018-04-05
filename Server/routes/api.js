const express = require('express');
const router = express.Router();
const fs = require('fs');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */

router.get('/', function (req, res) {
  res.send('api get works');
});
router.post('/', function (req, res) {
  res.send('api post works');
});
// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/deposits', (req, res) => {
  fs.readFile('src/assets/api/deposits.json', 'utf-8', function (err, data) {
    if (err) throw err
    var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.deposits.push({
      name: "Mikhail",
      age: 24
    })
    console.log(arrayOfObjects)
    fs.writeFile('src/assets/api/deposits.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
      if (err) throw err
      console.log('Done!')
    })
  })
});

router.post('/add-user', (req, res) => {
  let newUser = req.body;
  fs.readFile('src/assets/api/users.json', 'utf-8', function (err, data) {
    if (err) throw err
    var arrayOfUsers = JSON.parse(data)

    arrayOfUsers.users.push(newUser)
    fs.writeFile('src/assets/api/users.json', JSON.stringify(arrayOfUsers), 'utf-8', function (err) {
      if (err) throw err
      console.log('Done!')
    })
  })

});
module.exports = router;