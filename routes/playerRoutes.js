const express=require('express')
const router=express.Router()
//const Players = require('./../model/Players')
const playerController = require('./../controllers/playerController')

router.get('/Players', playerController.playerList)

router.get('/new-game',playerController.get_NewGame)

router.post('/new-game',playerController.post_NewGame)

router.get('/Host',playerController.get_Host)

router.post('/Host',playerController.post_Host)

router.delete('/Player/:id',playerController.delete_Player)

module.exports=router;