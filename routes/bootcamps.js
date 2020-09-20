const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: [] });
});
 
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, data: {}});
});

router.post('/', (req, res) => {
  res.status(201).json({ success: true, message: 'Food successfully created.' });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Deleted food with id ${req.params.id}` });
});

module.exports = router;