import mongoose from 'mongoose';
import './projects';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI } = process.env as { MONGO_URI: string };

const database = mongoose.connect(MONGO_URI, {
  dbName: 'evanloria'
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to mongodb, ', err);
})

export default database;
