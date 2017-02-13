var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  let strippedEmails = req.body.emails.replace(/\s/g, "");

  let emails = strippedEmails.split(",");

  knex.raw()

  emails.forEach(function(email){

  });
});

module.exports = router;
