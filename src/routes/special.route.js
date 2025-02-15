const express=require('express');
const router=express.Router();
const specialController=require('../controllers/special.controller');
const special = require('../models/special');
router.post('/',specialController.postSpecial);


module.exports=router;