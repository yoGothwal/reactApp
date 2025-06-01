import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get("/api/notes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setNotes(response.data.notes);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);
  const [expandedNote, setExpandedNote] = useState(null);

  const getTruncatedContent = (content) => {
    const words = content.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return content;
  };
  console.log("Notes fetched:", notes);
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title || !content) {
      console.error("Title and content are required");
      return;
    }
    axios
      .post(
        "/api/notes",
        { title, content },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data && response.data.note) {
          setNotes((prevNotes) => [...prevNotes, response.data.note]);
        }
        setTitle("");
        setContent("");
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  };
  const handleDeleteNote = (id) => {
    axios
      .delete(`/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };
  const handleEditNote = (note) => {
    window.location.href = `/notes/edit/${note._id}`;
  };

  return (
    <Box
      sx={{
        minWidth: { md: 400 },
        //boxShadow: 6,
        //borderRadius: 4,
        //background:use "rgba(35,37,38,0.85)", // dark glass effect
        backdropFilter: "blur(10px)",
        //border: "1px solid rgba(255,215,100,0.25)", // subtle gold border
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      {/* <Typography
        variant="h4"
        align="center"
        sx={{
          color: "#ffd700",
          textShadow: "0 2px 8px rgba(255,215,0,0.2)",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        Dashboard
      </Typography> */}
      {/* <Typography
        variant="body1"
        align="center"
        sx={{
          color: "#fff",
          opacity: 0.85,
        }}
      >
        Welcome to your dashboard!
      </Typography> */}

      <Paper
        sx={{
          p: 2,
          mb: 2,
          width: "100%",
          maxWidth: 500,
          background: "rgba(35,37,38,0.85)", // dark glass effect
          //border: "1px solidrgb(255, 255, 255)", // gold border
          boxShadow: "0 4px 24px rgba(255,215,0,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <form
          onSubmit={handleAddNote}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
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
                "&.Mui-focused": { color: "#fff" },
              },
            }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={2}
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
            Add Note
          </Button>
        </form>
      </Paper>
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: "#ffd700",
          textShadow: "0 2px 8px rgba(255,215,0,0.2)",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        NOTES
      </Typography>
      {notes.map((note, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            p: 2,
            mb: 2,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#ffd700",
                fontWeight: "bold",
              }}
            >
              {note.title}
            </Typography>
            <Box sx={{ display: "block", gap: 1 }}>
              <IconButton
                color="black"
                size="small"
                onClick={() => handleDeleteNote(note._id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="black"
                size="small"
                onClick={() => handleEditNote(note)}
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontSize: "0.95rem",
              opacity: 0.85,
              textIndent: "0.5em",
              mt: 1,
              whiteSpace: expandedNote === note._id ? "normal" : "nowrap",
              overflow: expandedNote === note._id ? "visible" : "hidden",
              textOverflow: expandedNote === note._id ? "clip" : "ellipsis",
              cursor:
                note.content.split(" ").length > 10 ? "pointer" : "default",
            }}
            onClick={() =>
              note.content.split(" ").length > 10
                ? setExpandedNote(expandedNote === note._id ? null : note._id)
                : undefined
            }
          >
            {expandedNote === note._id
              ? note.content
              : getTruncatedContent(note.content)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
