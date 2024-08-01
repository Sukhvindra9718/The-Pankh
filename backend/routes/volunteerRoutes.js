const {createVolunteer,getAllVolunteers} = require('../controllers/volunteerController.js')
const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware.js');

// Super admin middleware
router.post('/volunteer/upload',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,createVolunteer)
// router.get('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, getBannerByID)
// router.delete('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, deleteBanner)
// router.put('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, updateBanner)
// router.get('/getbanner/count',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware, getAllBannerCount)

// Admin middleware
router.post('/volunteer/upload',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,createVolunteer)
// router.get('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, getBannerByID)
// router.delete('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, deleteBanner)
// router.put('/banner/:id',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, updateBanner)
// router.get('/getbanner/count',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware, getAllBannerCount)


router.get('/volunteers',getAllVolunteers)



module.exports = router