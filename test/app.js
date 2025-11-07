// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware example
app.use(express.json());

// Basic route
app.get('/', function (req, res) {
  res.send('Hello World from Node 11!');
});

// Example POST route
app.post('/data', function (req, res) {
  res.json({ received: req.body });
});

// Start server
app.listen(port, function () {
  console.log('Server running on http://localhost:' + port);
});
