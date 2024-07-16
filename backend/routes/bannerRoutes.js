const {addBanner,getAllBanners,deleteBanner, getBannerByID } = require('../controllers/bannerController')
const { imageUpload } = require('../middleware/imageUpload')

const router = require('express').Router()


router.post('/banner/upload', imageUpload.single('image'), addBanner).get('/banners', getAllBanners).get('/banner/:id', getBannerByID).delete('/banner/:id', deleteBanner)

module.exports = router