import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContiner from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer'
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="colorPage">
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={() => (
              <ProfileContiner />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer/>
            )}
          />
          <Route path="/news" render={() => <NewsContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
