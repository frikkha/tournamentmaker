const express = require('express');
const router = express.Router();

// Tournament Model

const Tournament = require('../../models/Tournament');

// @route   GET api/tournament
// @desc    Get All Tournaments
// @access  Public
router.get('/q=all', (req, res) => {
    Tournament.find()
        .sort({date: -1})
        .then(tournaments => res.json(tournaments))
});


// @route   POST api/tournament
// @desc    Create A Tournament
// @access  Public
router.post('/q=add', (req, res) => {
    console.log(req);
    const newTournament = new Tournament({
        name: req.body.name,
        teams: [...req.body.teams]
    });
    newTournament.save()
        .then(tournament => res.json(tournament))
        //.error(err =>  {next(err)});
        .catch (err => {console.log(err)})
});

// @route   DELETE api/tournament/:id
// @desc    Delete A Tournament
// @access  Public
router.delete('/:id', (req, res) => {
    Tournament.findById(req.params.id)
        .then(tournament => tournament.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false}));
});

module.exports = router;