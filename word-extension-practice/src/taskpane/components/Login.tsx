import * as React from "react";

interface LoginProps {
    onLogin: () => void;
    onSwitchToSignup: () => void; // Callback to switch to the signup page
}

const Login: React.FC<LoginProps> = ({ onLogin, onSwitchToSignup }) => {
    return (
        <div>
            <h2>Login</h2>
            <button onClick={onLogin}>Log In</button>
            <p>
                Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button>
            </p>
        </div>
    );
};

export default Login;
