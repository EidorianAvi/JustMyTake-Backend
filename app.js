const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Enable CORS
app.use(cors());

// Imported Routes
const userRoute = require('./routes/users');
const gameReviewRoute = require('./routes/gameReviews');

app.use('/users', userRoute);
app.use('/game-reviews', gameReviewRoute);

//ROOT Route
app.get('/', (req, res) => {
    res.send("Welcome to the back-end of Just My Take");
});

//Connect to MongoDB database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, 
    () => console.log('Connected to DB')
);

//Listen to port 8000
app.listen(8000);