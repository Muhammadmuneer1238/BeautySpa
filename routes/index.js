var express = require('express');
var router = express.Router();
const {home,service,about,contact,dataCon}=require('../controller/controller')
//Routes defining
router.get('/', home);
router.get('/service', service);
router.get('/about', about);
router.get('/contact', contact);
router.post('/dataContact',dataCon)

module.exports = router;
