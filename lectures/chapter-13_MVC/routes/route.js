const express = require('express');
const router = express.Router();
const rootDir = require('../utils/routesUtil');
const path = require('path');
const { getUsers, postFormDetail, getFormDetail, errorController, getUsersler } = require('../controller/controllers');

router.get('/', getUsers);
router.post('/form-detail', postFormDetail);
router.get('/form-detail', getFormDetail);
router.use(errorController)

module.exports = router;