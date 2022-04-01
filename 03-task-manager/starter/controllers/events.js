const Event = require('../models/Event')

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({})
    res.status(200).json({ events })
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.status(201).json({event})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const getEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params
    const { event } = await Event.findOne({ _id: eventId })
  if(!event){
    return res.status(404).json({msg: 'No event with that id'})
  }
    res.status(200).json({ event })
  } catch {
    res.status(500).json({ msg: error })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params
    const event = await Event.findOneAndDelete({ _id: eventId })
    if(!event){
      return res.status(404).json({msg: 'No event with that id'})
    }
    res.status(200).json({ event })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params
    const event = await Event.findOneAndUpdate({ _id: eventId }, req.body, {
      new:true,
      runValidators:true,
    })
    if(!event){
      return res.status(404).json({msg: 'No event with that id'})
    }
    res.status(200).json({ event})
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllEvents, createEvent, getEvent, updateEvent, deleteEvent
}
