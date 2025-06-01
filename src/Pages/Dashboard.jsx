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
import FavoriteIcon from "@mui/icons-material/Favorite";

import DeleteIcon from "@mui/icons-material/Delete";
const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedNotes, setSelectedNotes] = useState([]);
  const [favoriteNotes, setFavoriteNotes] = useState([]); // Add this state

  const handleMarkFavorite = (noteId) => {
    setFavoriteNotes((prev) =>
      prev.includes(noteId)
        ? prev.filter((id) => id !== noteId)
        : [...prev, noteId]
    );
  };
  const handleSelectNote = (noteId) => {
    setSelectedNotes((prev) =>
      prev.includes(noteId)
        ? prev.filter((id) => id !== noteId)
        : [...prev, noteId]
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios
      .get("/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setNotes(response.data.notes);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [localStorage.getItem("token")]);

  const [expandedNote, setExpandedNote] = useState(null);
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
        axios
          .get("/api/notes", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => setNotes(res.data.notes))
          .catch((err) => console.error("Error fetching notes:", err));
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
  const handleDeleteSelected = () => {
    const token = localStorage.getItem("token");
    Promise.all(
      selectedNotes.map((id) =>
        axios.delete(`/api/notes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
    )
      .then(() => {
        setNotes((prevNotes) =>
          prevNotes.filter((note) => !selectedNotes.includes(note._id))
        );
        setSelectedNotes([]);
      })
      .catch((error) => {
        console.error("Error deleting selected notes:", error);
      });
  };
  const getTruncatedContent = (content) => {
    const words = content.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return content;
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
      <Paper
        sx={{
          p: 2,
          mt: 4,
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
      {notes.map((note, index) => {
        const isSelected = selectedNotes.includes(note._id);
        const isFavorite = favoriteNotes.includes(note._id);
        return (
          <Box
            key={index}
            sx={{
              width: "100%",
              p: 2,
              mb: 2,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: isSelected
                ? "rgba(255, 215, 0, 0.15)"
                : "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              cursor: "pointer",
              border: isSelected
                ? "2px solid #ffd700"
                : "2px solid transparent",
              transition: "border 0.2s, background 0.2s",
            }}
            onClick={() => handleSelectNote(note._id)}
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
              {/* Show action buttons only if this note is selected and only one note is selected */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {/* Show favorite icon only if not a single note is selected */}
                {!(selectedNotes.length > 1 && isSelected) && (
                  <FavoriteIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkFavorite(note._id);
                    }}
                    sx={{
                      color: isFavorite ? "#ff1744" : "#aaa",
                      cursor: "pointer",
                      fontSize: 24,
                      transition: "color 0.2s",
                    }}
                  />
                )}
                {/* Show delete/edit icons only if this note is selected and only one note is selected */}
                {selectedNotes.length === 1 && isSelected && (
                  <>
                    <DeleteIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteNote(note._id);
                      }}
                      sx={{
                        color: "#ff1744",
                        cursor: "pointer",
                        fontSize: 24,
                        transition: "color 0.2s",
                        "&:hover": { color: "#d50000" },
                      }}
                      aria-label="delete"
                    />
                    <EditIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditNote(note);
                      }}
                      sx={{
                        color: "#ffd700",
                        cursor: "pointer",
                        fontSize: 24,
                        transition: "color 0.2s",
                        "&:hover": { color: "#fff176" },
                      }}
                      aria-label="edit"
                    />
                  </>
                )}
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "0.95rem",
                opacity: 0.85,
                textIndent: "0.5em",
                mt: 1,
                overflow: expandedNote === note._id ? "visible" : "hidden",
                textOverflow: expandedNote === note._id ? "clip" : "ellipsis",
                cursor:
                  note.content.split(" ").length > 10 ? "pointer" : "default",
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (note.content.split(" ").length > 10) {
                  setExpandedNote(expandedNote === note._id ? null : note._id);
                } else {
                  setExpandedNote(null);
                }
              }}
            >
              {expandedNote === note._id
                ? note.content
                : getTruncatedContent(note.content)}
            </Typography>
          </Box>
        );
      })}
      {/* Show "Delete Selected" button only if more than one note is selected */}
      {selectedNotes.length > 1 && (
        <DeleteIcon
          onClick={handleDeleteSelected}
          sx={{
            mt: 2,
            color: "black",
            cursor: "pointer",
            fontSize: 40,
            transition: "color 0.2s",

            "&:hover": { color: "#d50000" },
            zIndex: 10,
            display: "block",
            mx: "auto",
          }}
          aria-label="Delete Selected"
        />
      )}
    </Box>
  );
};

export default Dashboard;
