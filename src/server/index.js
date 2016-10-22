const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;
const VERSION = 1;

const db = [];

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Version:' + VERSION))

app.listen(PORT, () => console.log('server started on PORT:', PORT));