const EducationModel=require('../models/education')
exports.posteducation=async(req,res)=>{
  try{
    const {userName,institution,degree,startDate,endDate}=req.body
    const santized=userName.replace(/\s+/g, '_').toLowerCase()

    const Education=new EducationModel({userName:santized,institution,degree,startDate,endDate})
    const result=await Education.save()
    res.send({result})
    

  }
  catch(err){

  }
}
exports.geteducation=async(req,res)=>{
    try{
            const {username}=req.query
            const santized=username.replace(/\s+/g, '_').toLowerCase()
            const result=await EducationModel.find({userName:santized})
            res.send({result})

    }
    catch(err){
        console.log(err)
    }
}