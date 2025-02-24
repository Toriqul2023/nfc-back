const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  uid:String,
 
  institution: { type: String, },
  degree: { type: String, },
  startDate: { type: String, },
  endDate: { type: String },
 
});

module.exports = mongoose.model('Education', educationSchema);