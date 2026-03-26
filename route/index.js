const express = require ('express')
const router = express.Router()
const apiroute = require ('./api')

router.use("/api", apiroute)

module.exports = router