import dotenv from "dotenv";
dotenv.config();
import application from './src/app';
import * as http from 'http';
import { connection } from './config/db';

const PORT = process.env.PORT || 4000;
const server = http.createServer(application.instance);

console.time("db connect");
connection();
console.timeEnd("db connect");

server.listen(PORT, () => {
  console.log(`Server started and running on http://localhost:${PORT} 🚀`);
});
