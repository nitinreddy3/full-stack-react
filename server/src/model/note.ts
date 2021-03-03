import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: 'string',
    required: false,
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
