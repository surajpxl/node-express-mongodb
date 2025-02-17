const fs = require('fs')

// fs.writeFile("hi.txt", "how are you", function(err){
//     if(err) console.log(err);
//     else console.log("done");
    
    
// })
// fs.appendFile("hi.txt", " how are you now", function(err){
//     if(err) console.log(err);
//     else console.log("append done");
    
// })
// fs.readFile("hi.txt", "utf8", function(err, data){
//     if(err) console.log(err);
//     else console.log("read done");
//     console.log(data);
    
    
// })

// fs.rename("hello2", "hello.txt",function(err){
//     if(err) console.log(err);
//    else console.log("Renamed");
    
// })

// fs.copyFile("hello.txt", "./copy/hey.txt",function(err){
//     if(err) console.log(err);
//   else  console.log("copied");
    
// })

// fs.copyFile("hello.txt", "./copy2/hey.txt",function(err){
//     if(err) console.log(err.message); //error showing
//    else console.log("copied");
    
// })

//  fs.unlink("he.txt", function(err){
//     if(err) console.log(err);
//     else console.log("removed file");
    
//  })

//  fs.rmdir("./hh", function(err){
//     if(err) console.log(err);
//     else console.log("remove only empty folder");
    
//  })

//  fs.rmdir("./hh", {recursive: true},function(err){
//     if(err) console.log(err);
//     else console.log("remove folder");
    
//  })


//   ------------------http---------------

        //   creating server 


// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end('Hello World!')
// })
// server.listen(3000);


// const http = require('http');
// const server = http.createServer(function(req, res){
//     res.end('i am suraj')
// })
//  server.listen(5000)

//  setTimeout(()=>{
//         server.close(()=>{
//                 console.log('server closed');
                
//         })
//  }, (10000)) // server closed in 10 second automatically


 
const http = require('http');
const server = http.createServer(function(req, res){
    res.end('i am suraj')
})
 server.listen(5000, ()=>{
        console.log('Server running on port 3000');
        
 })

 setTimeout(()=>{
        server.close(()=>{
                console.log('server closed');
                
        })
 }, (10000)) // server closed in 10 second automatically