const express = require ('express')
const router = express.Router()
const authroute = require ('./auth')
const categoryroute = require ('./category')
const productroute = require ('./product')
router.use(express.json())

router.use("/auth", authroute)
router.use("/category", categoryroute)
router.use("/product", productroute)

module.exports = router