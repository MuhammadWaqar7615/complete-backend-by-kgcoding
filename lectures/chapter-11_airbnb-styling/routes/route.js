const express = require('express');
const router = express.Router();
const rootDir = require('../utils/routesUtil');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

router.post('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

router.post('/form-detail', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'formDetail.html'));
})

router.use((req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = router;