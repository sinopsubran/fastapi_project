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
          username: username,
          password: password,
        }
      );

      console.log("Success:", response.data);
      setMessage(response.data.message);

    } catch (error: any) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
        setMessage(error.response.data.message || "Server Error");
      } else if (error.request) {
        console.log("No response received:", error.request);
        setMessage("No response from backend");
      } else {
        console.log("Error:", error.message);
        setMessage(error.message);
      }
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
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={login}>
        Login
      </button>

      <br />
      <br />

      <h3>{message}</h3>
    </div>
  );
}

export default App;
