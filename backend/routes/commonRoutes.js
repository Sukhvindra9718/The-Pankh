const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController.js');
const authMiddleware = require('../middleware/authMiddleware.js');


// Super admin middleware
router.get('/contact/all', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getAllContactUs);
router.get('/contact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getContactUsById);
router.delete('/contact/delete/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.deleteContactUs);
router.get('/keycontact/all', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getAllKeyContact);
router.post('/keycontact/register',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.addKeyContact);
router.get('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getKeyContactById);
router.delete('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.deleteKeyContact);

// Admin middleware
router.get('/contact/all', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getAllContactUs);
router.get('/contact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getContactUsById);
router.delete('/contact/delete/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.deleteContactUs);
router.post('/keycontact/register',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.addKeyContact);
router.get('/keycontact/all', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getAllKeyContact);
router.get('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getKeyContactById);
router.delete('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.deleteKeyContact);

// User middleware
router.post('/contact/register',commonController.registerContactUs);



module.exports = router;
