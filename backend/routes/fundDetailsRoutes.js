const express = require("express");
const router = express.Router();
const { addfundDetails, getAllfundDetails, getFundDetailByID, deleteFundDetails, updateFundDetails, getAllFundDetailsCount } = require("../controllers/fundController.js");
const authMiddleware = require("../middleware/authMiddleware.js");


// Super admin middleware
router.post('/fundDetails/upload', authMiddleware.authenticationMiddleware, authMiddleware.superAdminMiddleware, addfundDetails)
router.get('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.superAdminMiddleware, getFundDetailByID)
router.delete('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.superAdminMiddleware, deleteFundDetails)
router.put('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.superAdminMiddleware, updateFundDetails)
router.get('/fundDetails/count', authMiddleware.authenticationMiddleware, authMiddleware.superAdminMiddleware, getAllFundDetailsCount)

// Admin middleware
router.post('/fundDetails/upload', authMiddleware.authenticationMiddleware, authMiddleware.adminMiddleware, addfundDetails)
router.get('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.adminMiddleware, getFundDetailByID)
router.delete('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.adminMiddleware, deleteFundDetails)
router.put('/fundDetails/:id', authMiddleware.authenticationMiddleware, authMiddleware.adminMiddleware, updateFundDetails)
router.get('/fundDetails/count', authMiddleware.authenticationMiddleware, authMiddleware.adminMiddleware, getAllFundDetailsCount)


router.get('/fundDetails', getAllfundDetails)

module.exports = router;