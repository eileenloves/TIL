const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relation2',{useNewUrlParser:true})
  .then(()=>console.log('Connected to MongoDB!'))
  .catch(error=>console.error(error.message));

const authorSchema = new mongoose.Schema({
  name: String,
  github: String
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: [authorSchema]   //1:다 관계를 위해
});

// Schema Creation
const Author = mongoose.model('Author',authorSchema);

const Course = mongoose.model('Course',courseSchema);

async function createCourse(name, author){
  const course = new Course({name, author});
  const result = await course.save();
  console.log(result);
}

async function listCourses(){
  const courses = await Course.find();
  console.log(courses);
}

createCourse('Hyperledger', new Author({name:'Eileen',github:'eileenloves'}));
listCourses();