import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
const API_BASE_URL = import.meta.env.PROD
  ? "https://firstapp-3gem.onrender.com"
  : "/api";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleRegister = () => {
    console.log("Register button clicked");
    if (!username || !password) {
      console.error("Username and password are required");
      return;
    }
    axios
      .post(`${API_BASE_URL}/register`, { username, password })
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error(
          "Registration failed:",
          error.response ? error.response.data : error.message
        );
      });
    setUsername("");
    setPassword("");
  };
  return (
    <Box>
      <Box
        sx={{
          minWidth: { md: 400 },
          p: 4,
          //boxShadow: 6,
          backdropFilter: "blur(10px)",
          //borderRadius: 4,
          //background: "rgba(35,37,38,0.85)", // dark glass effect
          // border: "1px solid rgba(255,215,100,0.25)", // subtle gold border
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
            color: "white", // gold
            textShadow: "0 2px 8px rgba(255,215,0,0.2)",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Registration
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff", // input text color
              "& fieldset": { borderColor: "#ffd700" }, // gold border
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
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#ffd700" }, // gold border
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
          onClick={handleRegister}
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
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Registration;
