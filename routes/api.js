const express = require ('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// get a list of doctor from the db
router.get('/doctors', (req, res, next) => {
  /* Doctor.find({}).then((doctors) => {
      res.send(doctors);
  }); */
  Doctor.geoNear(
      {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
      {maxDistance: 100000, spherical: true}
  ).then(function(doctors){
      res.send(doctors);
  }).catch(next);
});

// add a new doctor to the db
router.post('/doctors', (req, res, next) => {
  Doctor.create(req.body).then((doctor) => {
      res.send(doctor);
  }).catch(next);
});

// update a doctor in the db
router.put('/doctors/:id', (req, res, next) => {
  Doctor.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
      Doctor.findOne({_id: req.params.id}).then((doctor) => {
          res.send(doctor);
      });
  }).catch(next);
});

// delete a doctor from the db
router.delete('/doctors/:id', (req, res, next) => {
  Doctor.findByIdAndRemove({_id: req.params.id}).then((doctor) => {
      res.send(doctor);
  }).catch(next);
});

module.exports = router;
