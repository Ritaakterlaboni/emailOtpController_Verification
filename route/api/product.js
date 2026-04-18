const express = require('express');
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split(".")[1])
  }
})
// const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

const {productController, 
  getProductController, 
  updateProductController, 
  deleteProduct, 
  deleteAllProduct} = require('../../controllers/productController');
const router= express.Router();

router.post("/createproduct", upload.single('image'), productController);
router.get("/getproduct", getProductController);
router.patch("/updateproduct/:id", updateProductController);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteallproduct", deleteAllProduct);

module.exports= router