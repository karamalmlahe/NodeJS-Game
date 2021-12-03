const express=require('express')
const router=express.Router()

const contactController = require('./../controllers/contactController')

router.get('/contactUs', contactController.getContactUs)
router.post('/contactUs',contactController.postContactUs)
router.delete('/contactUs/:id',contactController.deleteContactUs)

module.exports = router;