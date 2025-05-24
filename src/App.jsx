import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import MainLayout from "./Pages/MainLayout";
import { Box, Button, Typography } from "@mui/material";
const Hello = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minWidth: 400,
        p: 4,
        boxShadow: 6,
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
        Hello, Welcome to NoteApp!
      </Typography>
      <Button
        onClick={() => navigate("/registration")}
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
      <Typography
        variant="p"
        fontSize={16}
        fontStyle={"italic"}
        align="center"
        gutterBottom
        sx={{
          color: "white", // gold
          textShadow: "0 2px 8px rgba(255,215,0,0.2)",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        Already have an account?
      </Typography>
      <Button
        onClick={() => navigate("/login")}
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
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Hello></Hello>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<Hello></Hello>}></Route>
      </Routes>
    </MainLayout>
  );
};
export default App;
