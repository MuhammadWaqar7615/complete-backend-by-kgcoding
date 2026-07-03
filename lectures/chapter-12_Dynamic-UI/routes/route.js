const express = require('express');
const router = express.Router();
const rootDir = require('../utils/routesUtil');
const path = require('path');
const users = require('../data/users');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})


router.post('/form-detail', (req, res) => {
    users.push( { username: req.body.username, email: req.body.email});
    console.log("users :", users);
    res.redirect('/form-detail');
})

router.get('/form-detail', (req, res) => {
    res.render('formDetail', { users });
});

router.use((req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = router;