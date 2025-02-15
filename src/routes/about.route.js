const express=require('express')
const router=express.Router()

const aboutController=require('../controllers/about.controller')

router.post('/',aboutController.postabout)
router.get('/',aboutController.getabout)
router.put('/',aboutController.updateabout)


module.exports=router;