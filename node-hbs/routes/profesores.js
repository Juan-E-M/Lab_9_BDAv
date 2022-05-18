var express = require('express');
var router = express.Router();

var profesor = require('../controllers/ProfesorController.js');

router.get('/', profesor.list);
router.get('/show/:id', profesor.show);
router.get('/create', profesor.create);
router.post('/save', profesor.save);
router.get('/edit/:id', profesor.edit);
router.post('/update/:id', profesor.update);
router.post('/delete/:id', profesor.delete);

module.exports = router


