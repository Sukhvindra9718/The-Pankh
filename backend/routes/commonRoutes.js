const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController.js');
const authMiddleware = require('../middleware/authMiddleware.js');


// Super admin middleware

// Contact us
router.get('/contact/all', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getAllContactUs);
router.get('/contact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getContactUsById);
router.delete('/contact/delete/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.deleteContactUs);
    
// Key contact
router.post('/keycontact/register',authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.addKeyContact);
router.get('/keycontact/all', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getAllKeyContact);
router.get('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.getKeyContactById);
router.delete('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.deleteKeyContact);
router.put('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.superAdminMiddleware,commonController.updateKeyContact);

// Admin middleware

// Contact us
router.get('/contact/all', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getAllContactUs);
router.get('/contact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getContactUsById);
router.delete('/contact/delete/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.deleteContactUs);

// Key contact
router.post('/keycontact/register',authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.addKeyContact);
router.get('/keycontact/all', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getAllKeyContact);
router.get('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.getKeyContactById);
router.delete('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.deleteKeyContact);
router.put('/keycontact/:id', authMiddleware.authenticationMiddleware,authMiddleware.adminMiddleware,commonController.updateKeyContact);

// User middleware

// Contact us
router.post('/contact/register',commonController.registerContactUs);



module.exports = router;
