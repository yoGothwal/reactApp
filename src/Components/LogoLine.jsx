import { Box } from "@mui/material";

const LogoLine = () => {
  return (
    <Box sx={{ position: "absolute", top: 18, left: 0, width: "100%" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMinYMin meet"
        width="100%"
        height="auto"
        style={{ maxWidth: 300 }}
      >
        <line x1="8" y1="65" x2="221" y2="65" stroke="gold" strokeWidth="4" />
        <line x1="221" y1="65" x2="229" y2="25" stroke="gold" strokeWidth="4" />
      </svg>
    </Box>
  );
};

export default LogoLine;
