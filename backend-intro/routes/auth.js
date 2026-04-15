const express = require("express");
const { login } = require("../controllers/controllers-auth");
const router = express.Router();
router.post("/login", login);
module.exports = router;