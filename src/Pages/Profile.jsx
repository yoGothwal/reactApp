import { Box, Typography, Avatar, Modal } from "@mui/material";
import { useState } from "react";
import LogoutButton from "../Components/LogOutButton";
import profilePic from "../Images/pic.jpg";
const Profile = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = {
    name: localStorage.getItem("name") || "User",
    username: localStorage.getItem("username") || "Username",
    email: localStorage.getItem("email") || "Email",
    photo: profilePic,
  };
  return (
    <Box
      sx={{
        minWidth: { md: 400 },
        p: 4,
        //boxShadow: 6,
        //borderRadius: 4,
        //background: "rgba(35,37,38,0.85)",
        backdropFilter: "blur(10px)",
        //border: "1px solid rgba(255,215,100,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Avatar
        onClick={() => setOpen(true)}
        src={user.photo}
        alt={user.name}
        sx={{ width: 100, height: 100, mb: 2 }}
      ></Avatar>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "rgb(0, 0, 0)",
            outline: "none",
          }}
        >
          <img
            src={user.photo}
            alt={user.name}
            style={{
              maxWidth: "50vw",
              maxHeight: "50vh",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          />
        </Box>
      </Modal>
      <Typography
        variant="h5"
        align="center"
        sx={{
          color: "gold",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        {user.username}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: "white",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        {user.name}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "#fff",
          opacity: 0.85,
        }}
      >
        {user.email}
      </Typography>
      {isLoggedIn && <LogoutButton></LogoutButton>}
    </Box>
  );
};

export default Profile;
