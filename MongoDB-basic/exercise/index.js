const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise-basic', { useNewUrlParser:true })
  .then(()=>{console.log('Connected to MongoDB!')})
  .catch(error=>console.error(error.message));

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type:Date, default: Date.now },
    isPublished: Boolean,
    price: Number
  });
  
  const Course = mongoose.model('Course',courseSchema);

  async function getEx1(){
    const courses = await Course
    .find()
    .and([{isPublished:true}, {tags:'backend'}])
    .sort({name:1})
    .select('name author')

    console.log(courses);
  }

  async function getEx2(){
    const courses = await Course
    .find({isPublished: true})
    .or([{tags: 'frontend'}, {tags: 'backend'}])
    .sort('-price')
    .select('name price');

    console.log(courses);
  }

  async function getEx3(){
    const courses = await Course
    .find()
    .or([{ price: { $gt:15}}, {name: /.*js.*/i }])
    .select({tags:0})
    
    console.log(courses);
  }

  getEx1();
  getEx2();
  getEx3();




