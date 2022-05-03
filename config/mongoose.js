const mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOSTNAME,{
    useNewUrlParser:true    
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the DB'));

db.once('open',()=>{
    console.log('Successfully Connected to the Database');
});

module.exports = db;