const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krak:krak1234@cluster0.rlgg6.mongodb.net/Crud?retryWrites=true&w=majority',{
    useNewUrlParser:true    
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the DB'));

db.once('open',()=>{
    console.log('Successfully Connected to the Database');
});

module.exports = db;