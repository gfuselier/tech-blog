const router = require('express').Router();
const apiRoutes = require('./api');
//require any other routes here

router.use('/api', apiRoutes);
//add any other routes here


module.exports = router;