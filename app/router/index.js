const express = require('express');

const router = express.Router();

const model = {
  title: 'Light bulb'
};

router.get('/', (req, res) => {
  res.render('index', { data: model });
});

module.exports = router;
