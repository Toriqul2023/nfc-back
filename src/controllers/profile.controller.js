const ProfileModel=require('../models/profile')

exports.postprofile=async(req,res)=>{
    try{
            const {uid,nickName,designation,phone,image,address,fbLink,linkedin,insta,twitter}=req.body
           
            const find=await ProfileModel.find({uid})
            if(find.length>0){
                return res.send({count:1});
            }
            else{
            const Profile=new ProfileModel({uid,nickName,designation,phone,image,address,fbLink,linkedin,insta,twitter})
            const result=await Profile.save()
            res.send({result})
            }
    }
    catch(err){
        console.log(err)
    }
}
exports.updateprofile=async(req,res)=>{
    const {uid}=req.query
   
    const {nickName,designation,image,address,fbLink,linkedin,insta,twitter}=req.body
    const filter={uid}
    const options = { upsert: true };
    const updateDoc = {
        $set: {
          nickName,designation,image,address,fbLink,linkedin,insta,twitter
        },
      };
      const result=await ProfileModel.updateOne(filter,updateDoc,options)
      res.send({result});

}
exports.getprofile=async(req,res)=>{
    try {
           const {uid}=req.query
           const result=await ProfileModel.find({uid})
           res.send({result})
    }
    catch(err){
        console.log(err)
    }
}