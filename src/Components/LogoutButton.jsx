import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <i
      className="fa fa-sign-out"
      onClick={handleLogout}
      style={{
        // position: "fixed",
        // bottom: 30,
        // top: 50,
        fontSize: "1.6rem",
        color: "gold",
        cursor: "pointer",
      }}
    />
  );
};

export default LogoutButton;
