const EducationModel=require('../models/education')
exports.posteducation=async(req,res)=>{
  try{
    const {uid,institution,degree,startDate,endDate}=req.body
   

    const Education=new EducationModel({uid,institution,degree,startDate,endDate})
    const result=await Education.save()
    res.send({result})
    

  }
  catch(err){

  }
}
exports.geteducation=async(req,res)=>{
    try{
            const {uid}=req.query
            
            const result=await EducationModel.find({uid})
            res.send({result})

    }
    catch(err){
        console.log(err)
    }
}