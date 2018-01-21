const express = require('express');
const router = express.Router();
const Flat = require('../model/flats');

router.get('/', (req, res) => {
  res.send('hi');
});

router.route('/flats')
 .get(function(req, res) {
   Flat.find(function(err, flats) {
     if (err)
     res.send(err);
     res.json(flats)
   });
 })
 .post(function(req, res) {
   var flat = new Flat();
   flat.title = req.body.title;
   flat.location = req.body.location;
   flat.price = req.body.price;
   flat.amenities = req.body.amenities;
   flat.save(function(err) {
     if (err)
     res.send(err);
     res.json({ message: 'Flat successfully added!' });
   });
 });

module.exports = router;
