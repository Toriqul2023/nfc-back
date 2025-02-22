const express=require('express')
const router=express.Router()
const educationController=require('../controllers/education.controller')

router.post('/',educationController.posteducation)
router.get('/',educationController.geteducation)

module.exports=router