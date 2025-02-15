const express=require('express')
const router=express.Router()
const profileController=require('../controllers/profile.controller')

router.post('/',profileController.postprofile)
router.get('/',profileController.getprofile)
router.put('/',profileController.updateprofile)
module.exports=router