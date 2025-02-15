const express=require('express')
const router=express.Router()
const workController=require('../controllers/work.controller')
router.post('/',workController.postwork);
router.get('/',workController.getwork)
router.patch('/:id',workController.updatework)

module.exports=router;