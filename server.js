var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use("/public",express.static(__dirname + "/style"));
app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.get('/',function (req,res) {
  res.render('index');
});

app.listen(4444,()=>{
    console.log("Server started on https://localhost:4444/")
})