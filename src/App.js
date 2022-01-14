import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Message from "./components/message/Message";
import Profile from "./pages/profile/Profile";

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
        <Route path="/message"><Message /></Route>
        <Route path="/profile/:username"><Profile /></Route>
      </Switch>
    </Router>
  );
}

export default App;