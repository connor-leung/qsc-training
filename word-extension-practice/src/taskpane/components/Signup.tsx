import * as React from "react";

interface SignupProps {
    onSignup: () => void;
    onSwitchToLogin: () => void; // Callback to switch to the login page
}

const Signup: React.FC<SignupProps> = ({ onSignup, onSwitchToLogin }) => {
    return (
        <div>
            <h2>Signup</h2>
            <button onClick={onSignup}>Sign Up</button>
            <p>
                Already have an account? <button onClick={onSwitchToLogin}>Log In</button>
            </p>
        </div>
    );
};

export default Signup;
