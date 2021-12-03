const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    Name:{type: String, required:true},
    Email:{type: String, required:true},
    Message:{type: String, required:true},
    },{timestamps:true})

const Contact = mongoose.model('Contact Us', ContactSchema)

module.exports = Contact 