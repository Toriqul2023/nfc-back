const ProfileModel=require('../models/profile')

exports.postprofile=async(req,res)=>{
    try{
            const {userName,nickName,designation,phone,image,address,fbLink,linkedin,insta,twitter}=req.body
            const santized=userName ? userName.replace(/\s+/g, '_').toLowerCase():undefined;
            const find=await ProfileModel.find({userName:santized})
            if(find.length>0){
                return res.send({count:1});
            }
            else{
            const Profile=new ProfileModel({userName:santized,nickName,designation,phone,image,address,fbLink,linkedin,insta,twitter})
            const result=await Profile.save()
            res.send({result})
            }
    }
    catch(err){
        console.log(err)
    }
}
exports.updateprofile=async(req,res)=>{
    const {username}=req.query
    const santized=username.replace(/\s+/g, '_').toLowerCase()
    const {nickName,designation,image,address,fbLink,linkedin,insta,twitter}=req.body
    const filter={userName:santized}
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
           const {username}=req.query
           const result=await ProfileModel.find({userName:username})
           res.send({result})
    }
    catch(err){
        console.log(err)
    }
}