const express = require('express');
const path = require('path');
const { generateExcuse } = require('./excuseGenerator');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/excuse', (req, res) => {
  const { category } = req.body;
  const excuse = generateExcuse(category);

  res.json({ excuse });
});

module.exports = app;
