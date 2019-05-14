const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

// app.get('/', (req, res) => res.send('yo doggy'));
app.use('/', express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
