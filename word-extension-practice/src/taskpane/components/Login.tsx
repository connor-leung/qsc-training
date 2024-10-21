import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import the hook for navigation

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate(); // Use the hook for navigation

  const handleLogin = () => {
    onLogin();
    navigate("/posts"); // Redirect to posts after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
