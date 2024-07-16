const {addCarousal,getAllCarousals,deleteCarousal, getCarousalByID } = require('../controllers/carousalController')
const { imageUpload } = require('../middleware/imageUpload')

const router = require('express').Router()


router.post('/carousal/upload', imageUpload.single('image'), addCarousal).get('/carousals', getAllCarousals).get('/carousal/:id', getCarousalByID).delete('/carousal/:id', deleteCarousal)

module.exports = router