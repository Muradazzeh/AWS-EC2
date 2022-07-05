"use strict";

const express = require("express");
const PORT = process.env.PORT || 8080;
const app = new express();

app.use(express.static("./public"));

let path = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/main.html'));
});

app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`);
});