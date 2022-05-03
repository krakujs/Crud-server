const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://newuser:Yeshrajawat123@yrcluster.3l0b4.mongodb.net/Crud?retryWrites=true&w=majority',{
    useNewUrlParser:true    
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the DB'));

db.once('open',()=>{
    console.log('Successfully Connected to the Database');
});

module.exports = db;