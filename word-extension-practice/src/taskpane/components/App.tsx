import * as React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom"; // Use MemoryRouter instead of HashRouter
import Posts from "./Posts";
import Login from "./Login";
import Signup from "./Signup";

const App: React.FC = () => {
  const [isOfficeInitialized, setIsOfficeInitialized] = React.useState(false);

  // Use Office.onReady to ensure Office.js is fully loaded
  React.useEffect(() => {
    Office.onReady(() => {
      setIsOfficeInitialized(true);
    });
  }, []);

  const handleLogin = () => {
    console.log("User logged in!");
  };

  const handleSignup = () => {
    console.log("User signed up!");
  };

  if (!isOfficeInitialized) {
    return <p>Loading...</p>; // Show a loading message until Office.js is ready
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
