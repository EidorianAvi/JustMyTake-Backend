const mongoose = require('mongoose');

const GameReviewSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    publisher: String,
    review: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('GameReviews', GameReviewSchema);