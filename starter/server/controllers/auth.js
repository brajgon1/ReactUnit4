const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
require("dotenv").config();

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  login: async (req, res) => {
    let { username, password } = req.body;
    let token = createToken(username, password);
    console.log("login");
    res.status(200).send(token);
  },

  register: async (req, res) => {
    console.log("register");
    res.sendStatus(200);
  },
};
