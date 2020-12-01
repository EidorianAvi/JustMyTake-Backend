const express = require('express');
const router = express.Router();
const GameReview = require('../models/GameReview');

//Get all the game reviews
router.get('/', async (req, res) => {
    res.send('game reviews');
});

//Post a new game review
router.post('/add-review', async (req, res) => {
    const review = new GameReview({
        author: req.body.author,
        game: req.body.game,
        publisher: req.body.publisher,
        review: req.body.review
    });

    try {
        const savedReview = await review.save();
        res.json(savedReview);
    } catch(e) {
        res.json(e);
    }
});

module.exports = router;