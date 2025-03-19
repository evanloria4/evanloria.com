import path from 'path';
import express from 'express'

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

export default app;
