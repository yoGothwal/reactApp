import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        cursor: "pointer",
        minWidth: { md: 400 },
        p: 2,
        width: "100%",
        background: "linear-gradient(90deg, #ffd700 1%, #232526 100%)",
        //boxShadow: 6,
        //borderRadius: 4,
        //background: "rgba(35,37,38,0.85)", // dark glass effect
        // border: "1px solid rgba(255,215,100,0.25)", // subtle gold border
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        onClick={() => navigate("/dashboard")}
        variant="h5"
        align="left"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          color: "black", // gold
          letterSpacing: 2,
          fontStyle: "italic",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        NoteApp
      </Typography>
    </Box>
  );
};

export default Logo;
