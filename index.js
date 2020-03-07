const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

const arr = ['apples', 'bananas', 'peaches'];
app.get('/', (req, res) => res.render('index', {arr: arr}));

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    arr.push(req.body.text);
    res.redirect('/');
});

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));