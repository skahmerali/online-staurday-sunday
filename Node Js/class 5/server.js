const express = require("express");
const mongoose = require('mongoose');
const { Schema } = mongoose;
var jwt = require('jsonwebtoken');

let dbURI = "mongodb+srv://ahmerali:ahmerali@cluster0.slkv6.mongodb.net/ahmerali";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// Route Table 
mongoose.connection.on('connected',  () => {
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {
    console.log("Mongoose is disconnected");
    process.exit(1);
});

const app = express()
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  },
  userType: String,
});
// model is called database 
const OnlineClassModel = mongoose.model('onlineClass', blogSchema);
app.post('/login', (req, res)=>{

  const savaData = new OnlineClassModel ({
      title : "node js jwt class", 
      author : "sk ahmer ali", 
      body : "database learning", 
      comments : [{body :  "kamran khan" , data : new Date()}], 
      hidden : true, 
      meta: {
          votes: 28,
          favs: 50
        },
        userType : 'Admin'
      })
      savaData.save()
      var token = jwt.sign({ savaData }, '151511522649426954961');
      console.log(token);
      return(res.send({
        message: "succesfully send a token to front end",
        token
      }))
}).listen(5000 , ()=>{
  console.log("servern is running on 5000")
})

    // console.log(savaData.validate())