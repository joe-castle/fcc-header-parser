'use strict';

const express = require('express');
const app = express();

app.set("trust proxy", true);

app.get('/', (req, res) => {
  let software = req.headers['user-agent'].match(/\(([^)]+)\)/i)[0]
  software = software.substring(1, software.length-1);

  res.json({
    ipaddress: req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0],
    software
  });
});

module.exports = app;
