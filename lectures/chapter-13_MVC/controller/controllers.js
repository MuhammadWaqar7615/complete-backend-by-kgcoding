const UsersData = require('../models/users');

exports.getUsers = (req, res) => {
    res.render('home', {title: "practice", bodyUrl: req.url});
}

exports.postFormDetail = (req, res) => {
    const userData = new UsersData(req.body.username, req.body.gender, req.body.email)
    userData.save()
    res.redirect('/form-detail');
}

exports.getFormDetail = (req, res) => {
    UsersData.fetchAll(users => {
        res.render('formDetail', { users, title: 'form detail', bodyUrl: req.url });
    });
}

exports.errorController = (req, res) => {
    res.render('404', {title: 'Page not found'});
}