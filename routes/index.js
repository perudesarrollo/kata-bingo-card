const express = require('express');
const Bingo = require('./../model/bingo');
const router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  const Jugador = new Object()
  Jugador.uno = Bingo();
  Jugador.dos = Bingo();
  Jugador.tres = Bingo();
  res.send(JSON.stringify({
    cartillas: Jugador
  }))
  // res.render('index', { title: 'Express ee', bingoCard });
});

module.exports = router;
