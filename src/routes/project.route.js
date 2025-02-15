const express=require('express')
const router=express.Router()
const projectController=require('../controllers/project.controller')
router.get('/',projectController.getproject)
router.post('/',projectController.postproject)
router.patch('/:id',projectController.updateproject)

module.exports=router