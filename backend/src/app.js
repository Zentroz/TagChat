import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
  }
});

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));

io.on('connection', (socket) => {
  console.log(socket)
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import UserRouter from './routes/user.routes.js'

app.use("/user", UserRouter);

export default server;
export { io }