import {useState} from 'react';
import './App.css';

function App() {
  const [socket, setSocket]=useState();
  
  const connectSocket = (e) => {
    e.preventDefault();
    setSocket(new WebSocket('ws://localhost:5000'));
  }

  const handleForm = (e) => {
    e.preventDefault();

    // Connection opened
    socket.onopen = (e) => {
      console.log(e.target, "연결완료");
    }
    socket.onmessage = (e) => {
      const conversation= document.querySelector('.conversation');
      const li= document.createElement('li');
      console.log(li);
      li.textContent=(e.data);
      conversation.appendChild(li);
    }
    socket.onclose = (e) => {
      console.log("연결 종료");
    }
    
    
    const message=document.querySelector('.message')
    socket.send(message.value);
  }

  return (
    <div className="App">
      <div className="conversation">
      </div>
      <form onSubmit={handleForm}>
        <input type="text" className="id" placeholder="id"/>
        <input type="text" className="message" placeholder="대화내용"/>
        <input type="submit" value="전송"/>
      </form>
      <button onClick={connectSocket}>채팅 연결</button>
    </div>
  );
}

export default App;
