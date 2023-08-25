const express = require("express");
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
	socket.on('message', (event) => {
		const message = JSON.parse(event);
		if (message.type === 'codeSubmission') {
			const codeSubmission = message.data;
			fs.writeFile("pending/"+codeSubmission.game+"/"+codeSubmission.title+".py", codeSubmission.code, (err) => {
				if (err) {
					console.log(err);
				}
				else {
					console.log(codeSubmission.title + " was submitted.");
				}
			});
		}
	});
});

app.get("/", (req, res) => {
    //res.json({ message: "Hello from server!" });
	res.sendFile("Hi :)");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
