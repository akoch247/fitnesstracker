import { useAuth } from "../auth/AuthContext";
//import { usePage } from "./PageContext";
import { useNavigate, Link } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/activities">Activities</Link>
        {token ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
