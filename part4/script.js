const express = require('express');
// const { next } = require('react-bootstrap/esm/PageItem');
const app = express();

// app.get("/", function(req, res){
//     res.send("who are you?")
// })

// app.get("/profile", function(req, res){
//     res.send("I am Jarvis")
// })

// app.listen(3000)


// ---------Middleware use---------------------

// app.use(function(req, res, next){
//         console.log("middleware chala");
//         next();
// })

// app.use(function(req, res, next){
//         console.log("middleware chala ek aur baar");
//         next();
// })


// app.get("/", function(req, res){
//     res.send('I am manish')
// });
// app.get("/about", function(req, res){
//     res.send('this is about page')
// });
// app.get("/profile", function(req, res){
//     res.send('this is profile!')
// });
// app.listen(5000)


// -------------Error handling---------------------

app.get("/", function(req, res){
    res.send("This is home page")
})

app.get("/about", function(req, res){
    res.send("about page")
});

app.get("/profile", function(req, res, next){
    return next(new Error("something went wrong(console message)"));
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke! (frontend message)')
  })

app.listen(3000)

