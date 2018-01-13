const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const flat = {
    name: 'Loft',
    location: 'New York City',
    price: '2000USD'
  }
  res.json(flat);
});

module.exports = router;
