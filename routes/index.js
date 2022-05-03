const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

console.log('Router is Loaded');


router.get('/',homeController.home);
router.use('/user',require('./userRoute'));



module.exports = router