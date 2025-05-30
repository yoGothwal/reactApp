import { Box } from "@mui/material";

import Logo from "../Components/Logo";
import ProfileButton from "../Components/ProfileButton";
const MainLayout = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Box sx={{ position: "relative" }}>
      <Logo></Logo>
      {isLoggedIn && <ProfileButton></ProfileButton>}
      {/* Main content area */}
      {children}
    </Box>
  );
};

export default MainLayout;
