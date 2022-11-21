const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require ("body-parser");

const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const projectsRouter = require('./routes/projects');

const app = express();

var cors = require('cors')

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/students', studentsRouter);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// app.listen(3001,() => {
// 	console.log("Started listening on P:3001");
// })

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
})

module.exports = app;
