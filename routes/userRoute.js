const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/allUsers',userController.allUsers)
router.post('/add',userController.add);
router.put('/update',userController.update);
router.post('/delete',userController.delete);


module.exports = router;

