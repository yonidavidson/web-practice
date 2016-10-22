const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;
const VERSION = 1;

const db = ["Fortuna", "Moka", "Karashindo" , "Tyron"];

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Version:' + VERSION))

app.get('/names', (req, res) => res.send(db))

app.post('/names', (req, res) =>{
	const name = req.body
	db.concat(name)
	const location = '/names/' + name
	res.set('location','/names/testName').status(201).send()
})

app.listen(PORT, () => console.log('server started on PORT:', PORT));