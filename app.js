const express= require('express');
const cookieparser = require('cookie-parser');
const path =require('path');
const helmet = require('helmet');
const app= express();
const compression = require("compression");

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
res.render("index");
});
app.get("/aboutus",(req,res)=>{
res.render("aboutus");
});

app.listen(5000);