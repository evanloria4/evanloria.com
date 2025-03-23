import app from './app';
import './db/index';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
