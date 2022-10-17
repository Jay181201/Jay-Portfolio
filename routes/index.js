var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: "Jay's Portfolio" });
});

router.get('/about', (req, res, next) => {res.render('about', 
     { 
        email: "jaybarot1801@gmail.com",
        title: "About Me"
     });
  });

  router.get('/projects', (req, res, next) => {res.render('projects',
    {
        title: "My Projects"
    });
  });

  router.get('/services', (req, res, next) => {res.render('services',
    {
        title: "My Services"
    });
  });

  router.get('/contact', (req, res, next) => {res.render('contact',
    {
        title: "Contact Me"
    });
  });

  router.get('/error', (req, res, next) => {res.render('error',
    {
        title: "Error"
    });
  });

  router.get('/skills', (req, res, next) => {res.render('skills',
    {
        title: "Skills"
    });
  });

module.exports = router;
