const express = require('express');
const router = express.Router();
const GameReview = require('../models/GameReview');

//Get all the game reviews
router.get('/', async (req, res) => {
    try {
        const gameReviews = await GameReview.find();
        res.json(gameReviews)
    } catch(e) {
        res.json(e);
    }
});

//Get a single game review by ID
router.get('/:id', async(req, res) => {
    try {
        const gameReview = await GameReview.findById(req.params.id);
        res.json(gameReview);
    } catch(e) {
        res.json({message: "Couldn't find review"});
    }
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

//Update a game review
router.patch('/:id', async (req, res) => {
    try {
        const updatedReview = await GameReview.updateOne(
            { _id: req.params.id },
            { $set: {
                author: req.body.author,
                game: req.body.game,
                publisher: req.body.publisher,
                review: req.body.review
            }});

        res.json(updatedReview);
    } catch(e) {
        res.json({  message: "Couldn't update review" });
    }
});

//Delete a game review
router.delete('/:id', async(req, res) => {
    try {
        const deletedReview = await GameReview.remove({_id: req.params.id});
        res.json(deletedReview);
    } catch(e) {
        res.json({ message: "Couldn't delete review"})
    }
});

module.exports = router;