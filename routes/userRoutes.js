const express = require('express');
const { getDocs } = require('../controllers/userController');
const router = express.Router();

router.get('/get-documents', getDocs);

module.exports = router;
