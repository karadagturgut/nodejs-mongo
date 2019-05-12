var express = require('express');
var router = express.Router();

//Models

const User = require('../models/User')

router.post('/new', function (req, res, next) {
  const user = new User({
    Name: 'Sinan Tok',
    Age: 22
  })

  user.save((err, data) => {
    if (err)
      console.log(err)

    res.json(data)
  })
})
module.exports = router;
