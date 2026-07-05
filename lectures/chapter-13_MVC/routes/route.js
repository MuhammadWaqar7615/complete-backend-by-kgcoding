const express = require('express');
const router = express.Router();
const rootDir = require('../utils/routesUtil');
const path = require('path');
const { getHome, postFormDetail, getFormDetail, errorController } = require('../controller/controllers');

router.get('/', getHome);
router.post('/form-detail', postFormDetail);
router.get('/form-detail', getFormDetail);
router.use(errorController)

module.exports = router;