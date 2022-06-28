var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  var a = req.body.name;
  var b = req.body.pass;
  var c = req.body.email;
  var d = req.body.number;
  var e = req.body.gender;
  var f = req.body.birthday;
  var g = req.body.language;
  let h = req.body.address;
  var i = req.body.city;
  var j = req.body.state;
  var k = req.body.country;


  myobj = {
    myname: a,
    mypassword : b,
    myemail : c ,
    mycontact : d ,
    mygender :e , 
    mybirthday : f,
    mylanguage : g,
    myaddress : h,
    mycity : i , 
    mystate : j , 
    mycountry : k
  }
  
  res.render('ans', myobj);
});
module.exports = router;
