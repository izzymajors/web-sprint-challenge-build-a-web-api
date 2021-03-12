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
// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

module.exports = server;
