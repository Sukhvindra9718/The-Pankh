const {createTestimonial,getAllTestimonial} = require('../controllers/testimonialController.js')
const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware.js');

// Super admin middleware
router.post('/testimonial/upload',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,createTestimonial)
// router.get('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, getBannerByID)
// router.delete('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, deleteBanner)
// router.put('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, updateBanner)
// router.get('/getbanner/count',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, getAllBannerCount)

// Admin middleware
router.post('/testimonial/upload',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,createTestimonial)
// router.get('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, getBannerByID)
// router.delete('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, deleteBanner)
// router.put('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, updateBanner)
// router.get('/getbanner/count',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, getAllBannerCount)


router.get('/testimonials',getAllTestimonial)



module.exports = router