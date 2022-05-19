const express = require('express');
const router = express.Router();

const helper = require('../controllers/user.controller.js');

router.route('/')
    .get(helper.get)
    .post(helper.post);

module.exports = router;

