require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3001;
const routes = require('./routes/index');
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');
app.use(express.json());

app.use(cors());
app.use('/', routes);


app.listen( port , (err)=>{
    if(err){
        console.log('Error while listening to the port: ',port);
    }
    else{
        console.log('Successfully listening to the port : ',port);
    }
})