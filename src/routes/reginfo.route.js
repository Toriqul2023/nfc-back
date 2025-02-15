const express=require('express');
const router=express.Router();
const reginfoController=require('../controllers/regInfo.controller')
router.post('/',reginfoController.postreginfo)
router.get('/',reginfoController.getreginfo)

module.exports=router;