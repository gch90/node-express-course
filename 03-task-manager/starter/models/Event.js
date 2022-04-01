const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'must provide name'],
    maxLength:[32, 'name can not be more than 32 characters'],
    trim:true,
  },
  startDate:{
  type:Date,
  },
  endDate:{
  type:Date,
  min:Date.now(),
  }
  , description:{
  type:String,
  trim:true,
  }
})

module.exports = mongoose.model('Event', EventSchema)
