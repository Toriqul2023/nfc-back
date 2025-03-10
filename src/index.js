const express = require('express')
const mongoose=require('mongoose')
const app = express()
// const {NFC }= require('nfc-pcsc');
const cors=require('cors')
var vCardsJS = require('vcards-js');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const ok=require('../src/controllers/user.controller')
const userRoute=require('../src/routes/user.route')
const aboutRoute=require('../src/routes/about.route')
const workRoute=require('./routes/work.route')
const specialRoute=require('./routes/special.route')
const reginfoRoute=require('./routes/reginfo.route')
const profileRoute=require('./routes/profile.route')
const projectRoute=require('./routes/project.route')
const iontroRoute=require('./routes/intro.route')
const educationRoute=require('./routes/education.route')
const loginRoute=require('./routes/login.route')


const port = 1000
let latestUID = null;
// const nfc=new NFC()
// nfc.on('reader', reader => {
//   console.log(`NFC Reader Detected: ${reader.name}`);

//   reader.on('card', card => {
//       const uid = card.uid;
//       console.log(`Card UID: ${uid}`);  // Backend এ Console দেখাবে
//   });

//   reader.on('card-off', () => {
//       console.log('Card removed.');
//   });

//   reader.on('error', err => {
//       console.error('Reader Error:', err);
//   });
// });
app.post('/vcard',async(req,res)=>{
  const { name, phone, email, address} = req.body;
 let vCard =  vCardsJS();
 vCard.name = name;
 vCard.cellPhone = phone;
 vCard.email = email;
 vCard.homeAddress.street = address;
 vCard.workAddress = address;
 res.setHeader("Content-Disposition", `attachment; filename="${name.replace(/\s+/g, "_")}.vcf"`);
 res.setHeader("Content-Type", "text/vcard");
 


  res.send(vCard.getFormattedString())
})

const connectbd=async()=>{
      try{
      await mongoose.connect('mongodb+srv://nfcbangladesh:cEsALBA9aRp72zIj@cluster0.uaiap.mongodb.net/nfc?retryWrites=true&w=majority&appName=Cluster0')
        mongoose.set('bufferCommands',false)
      }
      catch(error){
        console.log(error) 
      }
}
connectbd().then(()=>{
         app.use('/',userRoute);
         app.use('/about',aboutRoute);
         app.use('/work',workRoute);
         app.use('/special',specialRoute);
         app.use('/reginfo',reginfoRoute);
         app.use('/profile',profileRoute);
         app.use('/project',projectRoute)
         app.use('/intro',iontroRoute)
         app.use('/education',educationRoute)
         app.use('/login',loginRoute)
         
        
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})