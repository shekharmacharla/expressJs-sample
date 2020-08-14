var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/myrequest', function(req, res, next) {
  let response = {
    title:"My first Rest endpoint",
    message:req.headers.message
  }
  res.send(response);
});

module.exports = router;
