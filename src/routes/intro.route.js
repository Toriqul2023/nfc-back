const express=require('express')
const introController=require('../controllers/intro.controller')
const router=express.Router()



router.post('/',introController.postintro)
router.get('/',introController.getintro)



module.exports=router