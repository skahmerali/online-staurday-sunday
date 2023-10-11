const express = require ("express");
const jwt = require("jsonwebtoken")
const app = express()
const PORT = 5000

// const getData = async (req, res , next) => {
//     try{
//          const authorization = req.body.authorization;
//          const decode= jwt.verify(Token ,'wabdjasbdkjasndkjsandkjsdnkasjdnj' );
//          console.log(decode)
//          next()
//     }
//     catch{
//         return(res.json({
//             status: 500,
//             message : "app is not on " 
//           }))

//     }
// }


app.post('/login',  async (req, res)=>{
    // res.status(200).send("app is running")
    try{
        const Token = jwt.sign({
            exp: Math.floor(Date.now() / 5000) + (60 * 60),
            data:{ 
                userName : "ahmer" , 
                designation : "Teacher"
            }
        }, 'wabdjasbdkjasndkjsandkjsdnkasjdnj');
    //   console.log(Token);
    
      return(res.json({
          status: 200,
          message : "app is running on " ,
          Token
        }))
    }
    catch{
        return(res.json({
            status: 400,
            message : "app is not running  " ,
          }))
    }
})

app.post('/home' , async(req, res )=>{
    try{
        const authHeader = await req.headers.token;
        const decodeData = jwt.verify(authHeader ,'wabdjasbdkjasndkjsandkjsdnkasjdnj');
        console.log(decodeData.data)
        if(!decodeData){
            console.log("decode data is not available")
        }else{

            return(res.json({
                status: 200,
                message : "app is running on " ,
            }))
        }
    }
    catch{
        return(res.json({
            status: 400,
            message : "app is not running  " ,
          }))
    }
})
app.listen(PORT , ()=>{
    console.log("server is running on " + PORT)
})