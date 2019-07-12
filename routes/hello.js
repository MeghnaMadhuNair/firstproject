var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let fName = req.query.fname
    console.log(fName)
    let lName = req.query.lname
    console.log(lName)
    res.render('hello', { name: fName, name1: lName });
});

router.post('/',function (req,res) {
    let fName = req.body.fname
    let lName = req.body.lname
    console.log(fName)
    res.render('hello', { name: fName, name1: lName });
})

module.exports = router;
