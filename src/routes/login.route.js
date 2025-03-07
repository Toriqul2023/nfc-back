const express=require('express');
const router=express.Router()
const loginController=require('../controllers/login.controller')


router.get('/',loginController.postLogin)
module.exports=router