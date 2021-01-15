const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type:String, required: true},
    start_date: {type:Date, required: true},
    c1_date: {type:Date, required: true},
    c_1_date: {type: Date, required: true, unique: true},
    finish_date: {type: Date, required: true}
})

module.exports = model('Event', schema)