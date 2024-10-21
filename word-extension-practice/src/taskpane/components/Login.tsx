import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/posts"); // Redirect to posts after login
  };

  const styles = {
    button: {
      margin: "0 0.5rem",
      padding: "0.5rem 1rem",
      backgroundColor: "#007BFF",
      color: "#FFF",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    container: {
      display: "table",
      width: "100%",
      height: "100vh",
    },
    heading: {
      marginBottom: "1rem",
    },
    paragraph: {
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <button style={styles.button} onClick={handleLogin}>Log In</button>
      <p style={styles.paragraph}>
        Don't have an account?{" "}
        <button style={styles.button} onClick={() => navigate("/signup")}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;