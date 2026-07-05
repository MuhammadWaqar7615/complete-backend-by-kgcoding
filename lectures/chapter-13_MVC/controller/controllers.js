const users = require('../models/users')

exports.getHome = (req, res) => {
    res.render('home', {title: "practice", bodyUrl: req.url});
}

exports.postFormDetail = (req, res) => {
    users.push( { username: req.body.username, gender: req.body.gender, email: req.body.email});
    console.log("users :", users);
    res.redirect('/form-detail');
}

exports.getFormDetail = (req, res) => {
    res.render('formDetail', { users, title: 'form detail', bodyUrl: req.url });
}

exports.errorController = (req, res) => {
    res.render('404', {title: 'Page not found'});
}