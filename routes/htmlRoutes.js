const router = require('express').Router();
const path = require('path');

// GET Route for homepage
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../notes.html'))
);

// Wildcard route to direct users to a 404 page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../index.html'))
);

module.exports = router;