import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Registration = () => {
  return (
    <Box
      sx={{
        width: 400,
        p: 4,
        boxShadow: 6,
        borderRadius: 4,
        background: "rgba(35,37,38,0.85)", // dark glass effect
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,215,100,0.25)", // subtle gold border
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
  );
};

export default Registration;
