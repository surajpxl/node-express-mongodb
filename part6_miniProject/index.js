const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());  //setting up parsers for form and handle the backend data, this and next line one line
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))) //path setup for img,video,text,etc.
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/profile/:username', function(req, res) {
    // res.send("Chal raha hai");
    // req.params.username
    // res.send(req.params.username)
    res.send(`Welcome, ${req.params.username}`)

});

app.get('/author/:username/:age', function(req, res) {
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
});

app.listen(3000, ()=>{
    console.log("its running");
    
})