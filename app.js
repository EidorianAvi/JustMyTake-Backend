const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


//Enable CORS
app.use(cors());

//ROOT Route
app.get('/', (req, res) => {
    res.send("Welcome to the back-end of Just My Take");
});

//Connect to MongoDB database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log('Connected to DB')
);

//Listen to port 6000
app.listen(8000);