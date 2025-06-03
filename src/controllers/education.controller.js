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
exports.updateEducation=async(req,res)=>{
   try{
    const {id}=req.params
    const query={_id:id}
    const {ininstitution,degree,startDate,endDate}=req.body
    const updateDoc = {
        $set: {
          ininstitution,degree,startDate,endDate
        },
      };
    
      const options = { upsert: true };

      const result=await ProjectModel.findByIdAndUpdate(query,req.body,options)
      res.send({result});
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