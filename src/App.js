import { useContext } from "react";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register"><Register /></Route>
        <Route path="/messenger"><Messenger /></Route>
        <Route path="/profile/:username"><Profile /></Route>
      </Switch>
    </Router>
  );
}

export default App;