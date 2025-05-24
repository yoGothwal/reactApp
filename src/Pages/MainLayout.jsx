import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative" }}>
      {/* User icon at top right */}
      <Box
        sx={{
          position: "fixed",
          top: 24,
          right: 32,
          zIndex: 100,
          cursor: "pointer",
        }}
        onClick={() => navigate("/profile")}
      >
        <FontAwesomeIcon icon={faUser} color="#ffd700" size="2x" />
      </Box>
      {children}
    </Box>
  );
};

export default MainLayout;
