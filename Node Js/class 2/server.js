let fs = require("fs");
let http = require("http");

fs.readFile('text.txt', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})