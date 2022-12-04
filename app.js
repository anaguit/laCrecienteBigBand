const express = require("express");
const path = require("path");
const crecienteRouter= require("./src/routers/crecienteRouter");
const app = express();

app.use(express.static(path.join(__dirname,"/public")));
app.use("/",crecienteRouter);
app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log("servidor corriendo");
});