const express = require ('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// get a list of doctor from the db
router.get('/doctors', (req, res) => {
    res.send({type: 'GET'});
});

// add a new doctor to the db
router.post('/doctors', (req, res) => {
  Doctor.create(req.body).then((doctor) => {
      res.send(doctor);
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
