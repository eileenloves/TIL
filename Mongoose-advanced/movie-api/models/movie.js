const Joi = require('Joi');
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  release: {
    type: Date,
    default: Date.now()
  },
  mainActor: {
    type: String,
    minlength: 1

  }
});

const Movie = mongoose.model('Movie', movieSchema);

function validateMovie(movie){
  const schema = {
    title: Joi.string().min(3).max(255),
    release: Joi.date(),
    mainActor: Joi.string().min(1)
  }
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
exports.movieSchema = movieSchema;