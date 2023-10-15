const express = require("express");
const register = require("./index1")
const login = require("./index2")
const logout = require("./logout")
const router = express.Router();

router.post("/index1",index1)
router.post("/index2",index2)
//router.get("/logout",logout)

module.exports = router;

