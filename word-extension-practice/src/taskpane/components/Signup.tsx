import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import the hook for navigation

interface SignupProps {
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const navigate = useNavigate(); // Use the hook for navigation

  const handleSignup = () => {
    onSignup();
    navigate("/posts"); // Redirect to posts after signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/")}>Log In</button>
      </p>
    </div>
  );
};

export default Signup;
