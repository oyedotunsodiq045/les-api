const express = require('express');
const { exportUsers, exportSme, exportNonSme } = require('../controllers/downloads');

const router = express.Router();

router.route('/users').get(exportUsers);

router.route('/smes').get(exportSme);

router.route('/non-smes').get(exportNonSme);

module.exports = router;