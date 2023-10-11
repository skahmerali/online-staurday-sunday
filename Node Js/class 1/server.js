let http = require("http");

const PORT =  5000 || process.env.PORT;
http.createServer((req , res)=>{
    res.writeHead( 200, {'Content-Type': 'text/plain'});
    res.end("SK digi Tech first server class on saturday");
}).listen(PORT , ()=>{
    console.log(`server is running ${PORT} sk digi tech`)
})
// http.createServer(function(){

// })