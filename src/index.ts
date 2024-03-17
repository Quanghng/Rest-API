import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
  credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080 , () => {
  console.log('Server running on http://localhost:8080/');
});

const MONGO_RUL ='mongodb+srv://quanghng:lOa8o2lsrohfM6tT@restapi.sq6zn97.mongodb.net/?retryWrites=true&w=majority&appName=restapi'

mongoose.Promise = Promise;
mongoose.connect(MONGO_RUL)
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully');
}).on('error', (error) => {
  console.log('MongoDB connection error:', error);
});

app.use('/', router())