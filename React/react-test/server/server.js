const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// ws
// https://masteringjs.io/tutorials/express/websockets
const WebSocket = require('ws');

app.get("/api", (req, res) => {
  res.send({
    "name": "chimy"
  });
})

const wsServer = new WebSocket.Server({ noServer: true });
wsServer.on('connection', socket => {
  console.log("연결됨");
  socket.on('message', message => console.log(message));
});

const server=app.listen(port, () => {
  console.log(`${port}번 포트로 서버 사용합니다`);
})

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});