import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
const API_BASE_URL = import.meta.env.PROD
  ? "https://firstapp-3gem.onrender.com"
  : "/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = () => {
    console.log("Login button clicked");
    if (!username || !password) {
      console.error("Username and password are required");
      return;
    }
    axios
      .post(`${API_BASE_URL}/login`, { username, password })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("uame", "Example User");
        localStorage.setItem("email", "example@gmail.com");
        localStorage.setItem("token", response.data.token);
        console.log("Token stored in localStorage:", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(
          "Login failed:",
          error.response ? error.response.data : error.message
        );
      });
    setUsername("");
    setPassword("");
  };
  return (
    <Box
      sx={{
        minWidth: { md: 400 },
        p: 4,
        //boxShadow: 6,
        //borderRadius: 4,
        //background: "rgba(35,37,38,0.85)", // dark glass effect
        backdropFilter: "blur(10px)",
        //border: "1px solid rgba(255,215,100,0.25)", // subtle gold border
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          color: "white",
          textShadow: "0 2px 8px rgba(255,215,0,0.2)",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        Login
      </Typography>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "#ffd700" },
            "&:hover fieldset": { borderColor: "#fff" },
            "&.Mui-focused fieldset": { borderColor: "#fff" },
            "& input::placeholder": { color: "#fff", opacity: 1 },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
            "&.Mui-focused": { color: "#fff" },
          },
        }}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "#ffd700" },
            "&:hover fieldset": { borderColor: "#fff" },
            "&.Mui-focused fieldset": { borderColor: "#fff" },
            "& input::placeholder": { color: "#fff", opacity: 1 },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
            "&.Mui-focused": { color: "#fff" },
          },
        }}
      />
      <Button
        onClick={handleLogin}
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #ffd700 0%, #fffbe6 100%)",
          color: "#232526",
          fontWeight: 700,
          boxShadow: "0 4px 20px 0 rgba(255,215,0,0.15)",
          "&:hover": {
            background: "linear-gradient(90deg, #fffbe6 0%, #ffd700 100%)",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
