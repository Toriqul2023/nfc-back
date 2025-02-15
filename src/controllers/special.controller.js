const specialModel=require('../models/special');
exports.postSpecial=async(req,res)=>{
    const {name,shortTitle}=req.body;
    const Special=new specialModel({name,shortTitle});
    const result=await Special.save();
    res.send({result});

}