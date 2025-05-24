import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
const Hello = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/registration");
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={register}>Register</button>
      <button>Login</button>
    </>
  );
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hello></Hello>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </>
  );
};
export default App;
