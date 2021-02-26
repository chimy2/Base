// const WebSocket = require('ws');

// module.exports = (_server) => {
//     const wss = new WebSocket.Server({ server:_server });

//     wss.on('connection', (ws, req) => { // 웹 소켓 연결 시
//         const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//         console.log('새로운 클라이언트 접속', ip);

        
//         ws.on('close', () => { // 연결 종료 시
//           console.log('클라이언트 접속 해제', ip);
//           clearInterval(ws.interval);
//       });

//     });
// };