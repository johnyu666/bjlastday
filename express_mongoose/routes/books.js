var express = require('express');
var router = express.Router();
var Book=require('../models/Book')

/* GET books listing. */
router.get('/', function(req, res) {
    Book.find({})
        .then(books=>res.json(books))
});

router.post('/', function(req, res) {
  Book.create(req.body)
      .then(newBook=>res.json(newBook))
});

router.delete('/:id',function (req,res) {
  Book.remove({_id:req.params.id})
      .then((rs)=>res.json(rs))
})
router.put('/:id',function (req,res) {
    Book.findByIdAndUpdate(req.params.id,
          req.body,
          {new :true}
        ).then(newBook=>res.json(newBook))
})



module.exports = router;
