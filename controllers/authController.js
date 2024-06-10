const User = require("../models/User");

async function register(req, res) {
  try {
    const { username, email } = req.body;

    let user = new User({ username, email });

    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

module.exports = { register };
