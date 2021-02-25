import './App.css';

function App() {
  
  // Create WebSocket connection.
  const socket = new WebSocket('ws://localhost:5000');

  // Connection opened
  socket.onopen = (e) => {
    console.log("연결 완료");
  }
  socket.onmessage = (e) => {
    console.log(e);
  }
  socket.onclose = (e) => {
    console.log("연결 종료");
  }
  
  const handleForm = (e) => {
    e.preventDefault();
    fetch('/api')
      .then(res=>res.json())
      .then(console.log);
  }

  return (
    <div className="App">
      <div className="conversation">
      </div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="id"/>
        <input type="text" placeholder="대화내용"/>
        <input type="submit" value="전송"/>
      </form>
    </div>
  );
}

export default App;
