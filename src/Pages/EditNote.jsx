import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL || "";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTitle(res.data.note.title);
        setContent(res.data.note.content);
      })
      .catch((err) => {
        console.error("Error fetching note:", err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `${baseURL}/api/notes/${id}`,
        { title, content },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Error updating note:", err);
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Paper
        sx={{
          p: 2,
          mb: 2,
          justifyContent: "center",
          alignItems: "center", // vertically center
          width: "280px",
          background: "rgba(35,37,38,0.85)", // dark glass effect
          boxShadow: "0 4px 24px rgba(255,215,0,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h5"
          mb={2}
          sx={{
            color: "#ffd700",
            textShadow: "0 2px 8px rgba(255,215,0,0.2)",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Edit Note
        </Typography>
        <form
          onSubmit={handleUpdate}
          style={{ display: "flex", flexDirection: "column", gap: 24 }} // increased gap for better spacing
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
                fontSize: "1.2rem",
                "&.Mui-focused": { color: "#fff" },
              },
            }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={1.5} // increase for more height
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": { borderColor: "#ffd700" },
                "&:hover fieldset": { borderColor: "#fff" },
                "&.Mui-focused fieldset": { borderColor: "#fff" },
                "& textarea": {
                  minHeight: 200, // increase height for textarea
                  fontSize: "1.1rem",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
                fontSize: "1.1rem",
                "&.Mui-focused": { color: "#fff" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ffd700",
              color: "#232526",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#e6be00",
              },
            }}
          >
            Update Note
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default EditNote;
