const express = require('express');
const router = express.Router();

const helper = require('../controllers/admin.js');

router.route('/')
    .get(helper.get)

module.exports = router;
