const express = require('express');
const userRouter = require('./routes/user');
const destinationRouter = require('./routes/destination');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/destinations', destinationRouter)

module.exports = app;