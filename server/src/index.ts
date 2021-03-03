import express from 'express';
import mongoose from 'mongoose';
import { getNotes } from './controller/note';

const app = express();
const PORT = process.env.PORT || 4000;
// const db = mongoose.connection;

app.use(express.json());

//Mongoose configurations
mongoose.connect(
  'mongodb+srv://nitin:nitin@cluster0.4jmpb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('Mongoose connected successfully');
});

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'API works fine'
//   })
// })

app.get('/api/notes', getNotes);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
