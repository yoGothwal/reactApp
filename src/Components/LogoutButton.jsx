import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
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
        position: "fixed",
        bottom: -120,
        fontSize: "1.6rem",
        color: "gold",
        cursor: "pointer",
      }}
    />
  );
};

export default LogOutButton;
