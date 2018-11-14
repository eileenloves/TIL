const mongoose = require('mongoose');

// 외부와 연결하는 것은 비동기로 동작!
mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser:true })
  .then(()=>{console.log('Connected to MongoDB!')})
  .catch(error=>console.error(error.message));

// 몽구스에서 스키마 기능을 제공 (몽고디비에는 스키마 존재 X)
// Available schema Datatypes : String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type:Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);

// table = collection 
// record,row = document

/* CRUD Operation */

  /* Create */
async function createCourse(){
  const course = new Course({
    name: '실전 dApp 빌드',
    author: 'Da Eun Kim',
    tags: ['Ethereum','Hyperledger'],
    isPublished: false
  });

  try{
    const result = await course.save();
    console.log(result);
  }catch(error){
    console.error(error.message);
  }
    
}

  /* Retrieve */
async function getCourses(){
  const courses = await Course
  .find({ price: { $lt:15, $gt:10}})
  console.log(courses);
}
// getCourses();


/* Update */
// 1. Query First: find => change => save
async function updateCourse(id){
  // Find
  const course = awaitCourse.findById(id)
  if(!course) return;

  // Change
  course.author = 'Eileen';
  course.tags = ['IBMer'];

  // Save
 const result = await course.save();
 console.log(result);
}

updateCourse();

// 2. Update First: 직접 update => result




// Example
// async function getCourses(){
//   const courses = await Course
  // .find({ price: { $lt:15, $gt:10}})
  // .find({ price: { $in: [10, 15]}})
  // .find({isPublished:true})
  // .limit(10)
  // .sort({name:-1})
  // .select({ name:1, tags:1})
  // .select('name tags')
  // .find({ author: /^ne/i })
  // .find({ author: /hn$/ })
  // .find({ author: /.*oh.*/ })
  // .count()
  // console.log(courses);
// }
/* 비교 쿼리 연산자
  Seq (equal)
  $neq (not equal)
  $gt (greater than)
  $gte (greater than or equal to)
  $lt (less than)
  $lte
  $in
  $nin
*/

/* 논리 쿼리 연산자
.or
  Course.find()
    .or([{ author: 'neo'}, { isPublished:false}]

.and
  Course.find()
    .and([{ author: 'neo'}, { isPublished:false}]
*/

// getCourses();