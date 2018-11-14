const mongoose = require('mongoose');

// 외부와 연결하는 것은 비동기로 동작!
mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser:true })
  .then(()=>{console.log('Connected to MongoDB!')})
  .catch(error=>console.error(error.message));

// 몽구스에서 스키마 기능을 제공 (몽고디비에는 스키마 존재 X)
// Available schema Datatypes: String, Number, Date, Buffer, Boolean, ObjectID, Array
// Available Validating Options:
// String: maxlength, minlength, match, enum
// Numbers, Dates: min, max
// All: required
const courseSchema = new mongoose.Schema({
  name: {type:String,required:true,minlength:2},
  author: String,
  tags: {
    type:Array,
    // custom validator
    validate: {
      validator: function(tags) { 
        const result = tags.every(tag=>tag.length>0)
        return tags && tags.length > 0 && result;
      },
      message: 'A Course should have at least 1 tag'
    }
  },
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
    name: "aa",
    author: 'JS',
    tags: ['a'],
    isPublished: true
  });

  try{
    // const result = await course.validate();
    const result = await course.save();
    console.log(result);
  }catch(error){
    console.error(error.message);
  }
    
}

<<<<<<< HEAD
=======
createCourse();

>>>>>>> mongodb-basic
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
<<<<<<< HEAD
  const course = awaitCourse.findById(id)
  if(!course) return;

=======
  const course = await Course.findById(id)
  if(!course) return;
>>>>>>> mongodb-basic
  // Change
  course.author = 'Eileen';
  course.tags = ['IBMer'];

  // Save
 const result = await course.save();
 console.log(result);
}

<<<<<<< HEAD
updateCourse();

// 2. Update First: 직접 update => result



=======
// updateCourse('5beb6f22db30fb26012bf234');

// 2. Update First: 직접 update => result
async function updateCourses(){
  const result = await Course.updateMany({isPublished:true},{
    $set: {
      author: 'Dimitri',
    }
  })
  console.log(result);
}

// updateCourses();

/* Delete */
async function deleteCourses(id){
  const result = await Course.deleteOne({_id:id});
  // const result = await Course.findOneAndDelete
  console.log(result);
}

// deleteCourses('5beb6f22db30fb26012bf234');
>>>>>>> mongodb-basic

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