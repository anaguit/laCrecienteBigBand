const express = require("express");
const crecienteRouter= require("./src/routers/crecienteRouter");
const app = express();

app.use("/",crecienteRouter);
app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log("servidor corriendo");
});