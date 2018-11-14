const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relation',{useNewUrlParser:true})
  .then(()=>console.log('Connected to MongoDB!'))
  .catch(error=>console.error(error.message));

  // Modeling
const Author = mongoose.model('Author', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength:2
  },
  github: String,
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name:{
    type: String,
    minlength:3,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, //Schema 자체가 mongodb에 존재하지 않는 개념이므로 접근할 때 이런식으로 접근해야함!
    ref: 'Author'
  }
}));

async function createAuthor(name,github) {
  const author = new Author({name,github});
  try{
    const result = await author.save();
    console.log(result);
  }catch(error){
    console.error(error.message);
  }
}

async function createCourse(name,author) {
  const course= new Course({name,author});
  try{
    const result = await course.save();
    console.log(result);
  }catch(error){
    console.error(error.message);
  } 
}

// createAuthor('Eileen','eileenloves');
// const id = mongoose.Types.ObjectId('5beba19a6ff14b28112fdc6b')
// createCourse('React',id);

async function listCourses() {
  const courses = await Course
    .find()
    .populate('author')
    .select('name');

  console.log(courses);
}
listCourses();