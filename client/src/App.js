import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import DevelopersPage from "./components/DevelopersPage/DevelopersPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Alert from "./components/layout/alert";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/developers" component={DevelopersPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
