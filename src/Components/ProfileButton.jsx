import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 15,
          right: 30,
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate("/profile")}
      >
        <FontAwesomeIcon
          icon={faUser}
          style={{
            marginTop: "0.5rem",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "#ffd700", // gold color
            cursor: "pointer",
          }}
        />
      </Box>
    </div>
  );
};

export default ProfileButton;
