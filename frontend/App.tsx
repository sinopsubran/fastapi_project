import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/login",
        {
          username: username,
          password: password,
        }
      );

      setMessage(response.data.message);

    } catch (error) {
      setMessage("Backend connection error");
      console.log(error);
    }
  };


  return (
    <div className="login-container">

      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default App;
