const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log("Request received"); 
    const logData = `Time: ${new Date().toISOString()} | ${req.method} ${req.url}\n`;

    fs.appendFile("log.txt", logData, (err) => {
        if (err) {
            console.log("Error writing log file:", err);
        } else {
            console.log("Log written successfully");
        }
    });
    res.end("Server Running...");
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
