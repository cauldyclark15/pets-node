const express = require('express');
const router = new express.Router();

const Goldfish = require('../db/models');

router.post('/goldfish', (req, res) => {
  console.log(req.body);
  const {id, name, owner, birth} = req.body;
  return Goldfish.sync({force: true})
    .then(() => {
      return Goldfish.create({
        id,
        name,
        owner,
        birth
      })
      .then(response => {
        return res.json(response)
      })
      .catch(error => {
        throw new Error('Internal server error.')
      })
    })
});

module.exports = router;
