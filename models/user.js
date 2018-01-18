var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function isEmailExists(email, callback) {
    if (email) {
        mongoose.models['User'].count({ _id: { '$ne': this._id }, email: email }, function (err, result) {
            if (err) {
                return callback(err);
            }
            callback(!result);
        })
    }
}
// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    
    password: {
        type: String,
        require: true
    },
    mno: {
        type: Number,
        
        index: {
            unique: true,
        },
        
        validate: {
            validator : isEmailExists, msg: 'Mobile already exists'
        }
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: {
            unique: true,
        },

        validate: {
            validator : isEmailExists, msg: 'Email already exists'
        }
    },
    
   
}))
