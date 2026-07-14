import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/login",
        {
          username,
          password,
        }
      );

      setMessage(response.data.message);

    } catch (error) {
      setMessage("Backend connection error");
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={login}>
        Login
      </button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
