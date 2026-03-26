const express = require('express');
const router = express.Router();
const {
    categoryController, 
    getAllCategory,
    updateCategoryController,
    deleteCategoryController
} = require("../../controllers/categoryController");
const {subCategoryController, getAllSubCategory} = require('../../controllers/subCategoryController');



router.post('/createcategory' , categoryController);
router.get('/getallcategory', getAllCategory);
router.post('/createsubcategory', subCategoryController);
router.get('/getallsubcategory', getAllSubCategory);
router.patch("/updatecategory/:id", updateCategoryController);
router.delete("/deletecategory/:id", deleteCategoryController)




module.exports = router;