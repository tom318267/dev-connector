import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import DevelopersPage from "./components/DevelopersPage/DevelopersPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Alert from "./components/layout/alert";
import CreateProfile from "./components/profile-form/CreateProfile";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/developers" component={DevelopersPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
