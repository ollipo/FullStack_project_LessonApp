const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      minLength: 3,
      required: true,
    },
    contents: [
      {
        subject: {
          type: String,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    students: [
      {
        name: {
          type: String,
          required: true,
        },
        class: {
          type: String,
          required: true,
        },
      },
    ],
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
);

lessonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
