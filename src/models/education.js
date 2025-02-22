const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  userName:String,
  institution: { type: String, },
  degree: { type: String, },
  startDate: { type: Date, },
  endDate: { type: Date },
 
});

module.exports = mongoose.model('Education', educationSchema);