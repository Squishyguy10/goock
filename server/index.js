const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
var http = require('http');
var server = http.createServer(app);
var { Server } = require("socket.io");
var io = new Server(server);
const fs = require('fs');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


io.on('connection', (socket) => {
	socket.on('submitCode', codeSubmission => {
		fs.writeFile("/pending/"+codeSubmission.title+".py", codeSubmission.code, (err) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log(codeSubmission.title + " was submitted.");
			}
		});
	}
}
