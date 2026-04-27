const express = require("express");
const router = express.Router();

const usersController = require("../../controllers/usersController");

// GET /users
router.get("/users", usersController);

module.exports = router;