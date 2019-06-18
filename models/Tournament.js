const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// Create Schema

const TournamentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    teams: [{
        name : String,
        goalsScored: Number,
        goalsConceded: Number,
        points: Number,
        out: Boolean
    }]
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);