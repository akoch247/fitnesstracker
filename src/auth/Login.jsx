import { useState } from "react";
import { useAuth } from "./AuthContext";
//import { usePage } from "../layout/PageContext";
import { useNavigate, Link } from "react-router-dom";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    tryLogin(formData);
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/register">Need an account? Register here.</Link>
    </>
  );
}
