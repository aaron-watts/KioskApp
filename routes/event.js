const express = require('express');
const router = express.Router();

const helper = require('../controllers/event.controller.js');

router.route('/')
    .get(helper.get)

module.exports = router;

