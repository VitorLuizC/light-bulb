const express = require('express');

const router = express.Router();

const viewModel = {
  title: 'Light bulb'
};

router.get('/', (req, res) => {
  res.render('index', { data: viewModel });
});

module.exports = router;
