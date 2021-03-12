const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const actionRouter = require('./actions/actions-router')
const projectRouter = require('./projects/projects-router')

const server = express();

// Complete your server here!
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use((req, res, next ) => {
  console.log('the path is', req.path)
  next()
}
// Do NOT `server.listen()` inside this file!

server.use("./api/project", projectRouter);
server.use("./api/actions", actionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

module.exports = server;
