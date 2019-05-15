const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const port = process.env.PORT || 8000;

// app.get('/', (req, res) => res.send('yo doggy'));
// app.use('/', express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  axios
    .get('http://localhost:8080/index.html')
    .then(response => res.send(response.data));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
