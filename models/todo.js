var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    email: {
        type: String,
        Required: 'Required to link Tasks'
    },
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    },
    completed_date: {
        type: Date
    }
});


module.exports = mongoose.model('Tasks', TaskSchema);