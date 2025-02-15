const userModel=require('../models/user')
exports.userpost=async(req,res)=>{
     try{
          const {name,size,roll} =req.body
          const User=new userModel({name,size,roll});
          const result=await User.save();
          res.send({result});
     }
     catch(err){
          console.log(err)
     }

     
}
exports.userget=async(req,res)=>{
     
     const {name,size,roll} =req.body
     
    const result=await userModel.find({});
    res.send({result});
}