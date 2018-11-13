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
// CRUD
const course = new Course({
  name: '실전 dApp 빌드',
  author: 'Da Eun Kim',
  tags: ['Ethereum','Hyperledger'],
  isPublished: false
});

course.save()
  .then(result=>console.log(result))
  .catch(error=>console.error(error.message));

