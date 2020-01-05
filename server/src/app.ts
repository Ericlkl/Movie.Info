// import modules
import path from 'path';
import express, { Request, Response, json } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
// initial Express app
const app = express();

// Server Logs
app.use(morgan('dev'));

// allows server receiving json data
app.use(json());
// make client/build folder as default static files location
app.use(express.static(path.resolve(__dirname, '../', 'client', 'build')));

// Plug API Router in
require('./routes')(app);

// The others route makes it default as return webpage
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
});

export default app;
