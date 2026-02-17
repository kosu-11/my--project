const http =require("http");
const fs =require("fs");
const path = require("path");
const { json } = require("stream/consumers");
const { log } = require("console");
const filePath = path.join(__dirname, "notes1.json");

const server = http.createServer((req, res) => {
    const url =new URL(req.url,`http://${req.headers.host}`);
    const pathname = url.pathname;
    const method = req.method;


    if(method === "GET" && pathname === "/") {
      res.writeHead(200, "server responded")
      res.end()
    } else if(method == "GET" && pathname == "/notes") {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if(err) {
          res.writeHead(500, "cannot get data")
          res.end()
        } else {
          res.writeHead(200, {"content-type" : "application/json"});
          res.end(data);
        }
      })
    } else if(method == "POST" && pathname == "/notes") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
          // {"note": "hi"}
        })

        req.on("end", () => {
          fs.readFile(filePath, "utf-8", (err, data) => {
            const notes = JSON.parse(data);
            notes.push(body)
            fs.writeFile(filePath, JSON.stringify(notes), ()=> {
            res.writeHead(200, "done!");
            res.end()
          })
        })
      })
    }

});


server.listen(3000,() => {console.log("Server running on http://localhost:3000");
});
