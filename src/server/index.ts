import app from './app';
import './db/index';
import dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT || '4000')

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
