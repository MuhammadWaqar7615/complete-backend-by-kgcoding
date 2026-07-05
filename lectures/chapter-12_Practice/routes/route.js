const express = require('express');
const router = express.Router();
const rootDir = require('../utils/routesUtil');
const path = require('path');
const users = require('../data/users');

router.get('/', (req, res) => {
    res.render('home', {title: "practice", bodyUrl: req.url});
})

router.post('/form-detail', (req, res) => {
    users.push( { username: req.body.username, gender: req.body.gender, email: req.body.email});
    console.log("users :", users);
    res.redirect('/form-detail');
})

router.get('/form-detail', (req, res) => {
    res.render('formDetail', { users, title: 'form detail', bodyUrl: req.url });
});

router.use((req, res) => {
    res.render('404', {title: 'Page not found'});
})

module.exports = router;