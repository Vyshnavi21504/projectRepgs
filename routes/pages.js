const express = require("express");
const router = express.Router();

router.get("/" , (req,res)=>{
    res.render("index");
})
router.get("/index1",(req,res)=>{
    res.sendFile("index1.html",{root:"./public/"});
})
router.get("/index2",(req,res)=>{
    res.sendFile("index2.html",{root:"./public/"})
})

module.exports = router;