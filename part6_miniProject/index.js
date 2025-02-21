const express = require('express');
const app = express();

app.use(express.json());  //setting up parsers for form, this and next line one line
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("chal raha hai");
});

app.listen(3000, ()=>{
    console.log("its running");
    
})