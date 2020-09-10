const express = require('express');
const { exportUsers, exportSme, exportNonSme } = require('../controllers/downloads');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
    .route('/users')
    .get(protect, exportUsers);

router
    .route('/smes')
    .get(protect, exportSme);

router
    .route('/non-smes')
    .get(protect, exportNonSme);

module.exports = router;