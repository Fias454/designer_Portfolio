const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app  = express();
const PoRt = 865;
app.get("/", (req,res)=>{
    res.redirect("/Main");
});
app.use("/Main", express.static(path.join(__dirname, "Public/Main")))
app.listen(PoRt, ()=>{
    console.log(`http://localhost:${PoRt}`);
});