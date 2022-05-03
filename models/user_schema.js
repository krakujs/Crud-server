const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;