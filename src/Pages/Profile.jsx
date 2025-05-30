import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Components/LogOutButton";
const Profile = () => {
  const navigate = useNavigate();
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
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#ffd700",
          textShadow: "0 2px 8px rgba(255,215,0,0.2)",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        Profile
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "#fff",
          opacity: 0.85,
        }}
      >
        This is your profile page.
      </Typography>
      <LogoutButton></LogoutButton>
    </Box>
  );
};

export default Profile;
