const express = require("express");
const fs = require("fs");
console.log(express);
const app = express();

app.get("/", myfn)
app.get("/posts")

app.listen(3000, () =>  {
    console.log("server running");
    
})

console.log(app);
