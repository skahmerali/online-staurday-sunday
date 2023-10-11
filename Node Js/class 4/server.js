// app.get("/", age = 20 ,(req, res)=>{

// });
var express = require("express");
var app = express();
var router = require("./app.js")
// const router = express.Router();
// app.all("/secret", function (req, res, next) {
//     res.send("this is class 3")
//     console.log("Accessing the secret section…");
//     next(); // pass control to the next handler
//   });
app.use("/wiki", router)
  app.listen(5000, ()=>{
    console.log("server is running")
  })