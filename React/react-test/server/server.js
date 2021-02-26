const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.send({
    "name": "chimy"
  });
})

const server=app.listen(port, () => {
  console.log(`${port}번 포트로 서버 사용합니다`);
})

const WebSocket = require('ws');
// const wsServer = new WebSocket.Server({ noServer: true });
const wsServer = new WebSocket.Server({server});

wsServer.on('connection', socket => {
  console.log(socket.readyState,"연결됨");
  socket.on('message', message => {
    // socket.send(message);
    wsServer.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN){
        client.send(message);
      }
    })
  });
});

// ws
// https://masteringjs.io/tutorials/express/websockets
// server.on('upgrade', (request, socket, head) => {
//   wsServer.handleUpgrade(request, socket, head, socket => {
//     wsServer.emit('connection', socket, request);
//   });
// });
