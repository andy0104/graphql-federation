import express, {Express, Request, Response} from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.NODE_PORT || 4000;
const app = express();
// const httpServer = http.createServer(app);

app.get('/', (req: Request, res: Response) => {
  return res.send(`Hello World!`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});