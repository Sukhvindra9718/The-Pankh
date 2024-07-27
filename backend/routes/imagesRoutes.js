const {addImage,getAllImages,getImage,deleteImage,updateImage } = require('../controllers/imageController')
const { imageUpload } = require('../middleware/imageUpload')
const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware.js');


// Super admin middleware
router.post('/image/upload',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, imageUpload.single('image'), addImage)
router.delete('/image/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, deleteImage)
router.put('/image/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, updateImage)

// Admin middleware
router.post('/image/upload',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, imageUpload.single('image'), addImage)
router.delete('/image/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, deleteImage)
router.put('/image/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, updateImage)

// User middleware
router.get('/images', getAllImages)
router.get('/image/:id', getImage)

module.exports = router