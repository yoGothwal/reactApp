import { Box } from "@mui/material";
import Logo from "../Components/Logo";
import ProfileButton from "../Components/ProfileButton";
const MainLayout = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "sticky",

          zIndex: 1000,
          width: "100%",
          height: 20,
        }}
      >
        <Logo />
      </Box>
      {children}
      {isLoggedIn && <ProfileButton></ProfileButton>}
    </Box>
  );
};

export default MainLayout;
