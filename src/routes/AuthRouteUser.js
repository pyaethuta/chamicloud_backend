const express = require('express');
const { SignUp } = require('../controller/usersAuth');
const router = express.Router();


// route define
router.post('/signup', SignUp);

// export
module.exports = router;

