const express = require('express');
const router = express.Router();
const {
    categoryController, 
    getAllCategory} = require("../../controllers/categoryController");



router.post('/createCategory' , categoryController);
router.post('/getAllCategory', getAllCategory)


module.exports = router;