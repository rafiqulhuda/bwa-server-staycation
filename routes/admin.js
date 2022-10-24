const router = require('express').Router()
const adminController = require('../controllers/adminController')
const {upload} = require('../middleware/multer')
const {uploadMultiple} = require('../middleware/multer')
const auth = require('../middleware/auth')

router.get('/signin', adminController.viewSignin)
router.post('/signin', adminController.actionSignin)
router.use(auth);
router.get('/logout', adminController.actionLogout)
router.get('/dashboard', adminController.viewDashboard)
// endpoint category
router.get('/category', adminController.viewCategory)
router.post('/category', adminController.addCategory)
router.put('/category', adminController.editCategory)
router.delete('/category/:id', adminController.deleteCategory)
// endpoint bank
router.get('/bank', adminController.viewBank)
router.post('/bank',upload, adminController.addBank)
router.put('/bank',upload, adminController.editBank)
router.delete('/bank/:id',upload, adminController.deleteBank)
// endpont item
router.get('/item', adminController.viewItem)
router.post('/item', uploadMultiple, adminController.addItem)
router.get('/item/show-image/:id', adminController.showImageItem)
router.get('/item/:id', adminController.showEditItem)
router.put('/item/:id', uploadMultiple, adminController.editItem)
router.delete('/item/:id/delete', adminController.deleteItem)

// end point detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem)
router.post('/item/add/feature',upload, adminController.addFeature)
router.put('/item/update/feature',upload, adminController.editFeature)
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature)

router.post('/item/add/activity',upload, adminController.addActivity)
router.put('/item/update/activity',upload, adminController.editActivity)
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity)

router.get('/booking', adminController.viewBooking)
router.get('/booking/:id', adminController.showDetailBooking)
router.put('/booking/:id/confirmation', adminController.actionConfirmation)
router.put('/booking/:id/reject', adminController.actionReject)

module.exports = router;