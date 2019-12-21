const express = require('express');
const router = express.Router();

const msgHelper = require('../helpers/msgHelper');

router.get('/', (req, res) => {
  res.send(msgHelper.getMsg());
});

module.exports = router;
