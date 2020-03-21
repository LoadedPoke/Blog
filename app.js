const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Post = require('./models/post');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    Post.find({}).then(
        posts => {
            res.render('index', {posts})
        },
        err => {
            res.status(200).json({err})
        }
    );
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const {title, body} = req.body;
    Post.create({
        title,
        body
    }).then(post => console.log(post._id));
    res.redirect('/');
});

module.exports = app;