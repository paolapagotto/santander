const express = require('express');
const router = express.Router();

const SantanderController = require('../controllers/SantanderController');
// router.get('/', function(req, res, next){
//     return res.status(200).json({message: 'Sua API está ok'})
// });
router.get('/', SantanderController.index);

module.exports = router;