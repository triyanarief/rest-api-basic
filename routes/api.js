const express = require ('express');
const router = express.Router();

// get a list of doctor from the db
router.get('/doctors', (req, res) => {
    res.send({type: 'GET'});
});

// add a new doctor to the db
router.post('/doctors', (req, res) => {
  console.log('You made a POST request: ', req.body);
  res.send({
      type: 'POST',
      name: req.body.name,
      rank: req.body.rank
  });
});

// update a doctor in the db
router.put('/doctors/:id', (req, res) => {
    res.send({type: 'PUT'});
});

// delete a doctor from the db
router.delete('/doctors/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;
