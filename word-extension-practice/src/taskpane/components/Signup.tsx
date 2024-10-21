import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import the hook for navigation

interface SignupProps {
  onSignup: () => void;
}

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

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const navigate = useNavigate(); // Use the hook for navigation

  const handleSignup = () => {
    onSignup();
    navigate("/posts"); // Redirect to posts after signup
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <button style={styles.button} onClick={handleSignup}>Sign Up</button>
      <p style={styles.paragraph}>
        Already have an account?{" "}
        <button style={styles.button} onClick={() => navigate("/")}>Log In</button>
      </p>
    </div>
  );
};

export default Signup;
