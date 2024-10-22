const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });



  if (req.url =="/") {
    // 
    fs.readFile("index.html","utf-8", (err, data) => {
        if (err) {
            console.log("Error reading");
            

        }
        else{
            res.end(data);
        }
        
    })

  } else if (req.url == "/service") {
    res.end("Services page hit successfully");
  }
  else if (req.url == "/login") {
    res.end("Services page hit successfully");
  }
  else if (req.url == "/signup"){
    res.end("login page hit successfully");

  }
  else if (req.url == "/contact"){
    res.end("Contact page hit successfully");
  }
});

server.listen(8090, () => {
  console.log("Server listening on port 8090");
});
