const express = require('express');
const router = express.Router();
const {
    categoryController, 
    getAllCategory,
    updateCategoryController,
    deleteCategoryController,
    deleteAllCategory
} = require("../../controllers/categoryController");
const {subCategoryController, getAllSubCategory} = require('../../controllers/subCategoryController');



router.post('/createcategory' , categoryController);
router.get('/getallcategory', getAllCategory);
router.post('/createsubcategory', subCategoryController);
router.get('/getallsubcategory', getAllSubCategory);
router.patch("/updatecategory/:id", updateCategoryController);
router.delete("/deletecategory/:id", deleteCategoryController);
router.delete("/deleteallcategory", deleteAllCategory);




module.exports = router;