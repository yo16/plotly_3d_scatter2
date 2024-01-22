var path = require("path");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("index.html", {
    root: path.join("public","scatter-app-build"),
  });
});
router.use(express.static(path.join("public","scatter-app-build")));

module.exports = router;
