const express = require ('express')
const router = express.Router()
const authroute = require ('./auth')
const categoryroute = require ('./category')
router.use(express.json())

router.use("/auth", authroute)
router.use("/category", categoryroute)

module.exports = router