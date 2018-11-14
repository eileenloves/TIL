const { Movie, validate } = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('title');
  res.send(movies);
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error){
    return res.status(400).send(error.message);
  }

  let movie = new Movie({ 
    title: req.body.title,
    mainActor: req.body.mainActor
  });
  movie = await movie.save();

  res.send(movie);
})

router.get('/:id',async (req,res) => {
  const movie = await Movie.findById(req.params.id);
  if(!movie) return res.status(404).send('The genre with the given ID was not found:/');
  res.send(movie);
})

router.patch('/:id',async (req,res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.message);

  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    mainActor: req.body.mainActor
  },{ new:true })

  res.send(movie);
})

router.delete('/:id',async (req,res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if(!movie) return res.status(400).send(error.message);
  res.send(movie);
})

module.exports = router;

