import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import Posts from "./Posts";
import Login from "./Login";
import Signup from "./Signup";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC = () => {
  const styles = useStyles();
  const [isOfficeInitialized, setIsOfficeInitialized] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isSigningUp, setIsSigningUp] = React.useState(false);

  // Use Office.onReady to ensure Office.js is fully loaded
  React.useEffect(() => {
    Office.onReady(() => {
      setIsOfficeInitialized(true);
    });
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const switchToSignup = () => {
    setIsSigningUp(true);
  };

  const switchToLogin = () => {
    setIsSigningUp(false);
  };

  if (!isOfficeInitialized) {
    return <p>Loading...</p>; // Show a loading message until Office.js is ready
  }

  if (!isAuthenticated) {
    if (isSigningUp) {
      return <Signup onSignup={handleSignup} onSwitchToLogin={switchToLogin} />;
    } else {
      return <Login onLogin={handleLogin} onSwitchToSignup={switchToSignup} />;
    }
  }

  return (
    <div className={styles.root}>
      <Posts />
    </div>
  );
};

export default App;
