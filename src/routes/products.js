// ************ Require's ************
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer')
// ************ Controller Require ************
const {create,detail,index,edit,destroy,store,update} = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/',index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create',create);
router.post('/create',upload.single('image'),store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/',detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',edit); 
router.put('/update/:id',upload.single('image'),update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', destroy); 


module.exports = router;
