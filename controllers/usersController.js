const User = require("../model/userSchema");

// GET users
const usersController = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Users fetch failed",
      error: error.message,
    });
  }
};

module.exports = usersController;