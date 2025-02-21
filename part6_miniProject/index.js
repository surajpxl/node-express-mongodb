const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());  //setting up parsers for form, this and next line one line
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))) //path setup for img,video,text,etc.
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index");
});

app.listen(3000, ()=>{
    console.log("its running");
    
})