import React, { Fragment } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import NotificationIcon from "./components/NotificationIcon";
import ModalContainer from "./containers/ModalContainer";

function App() {
  return (
    <Fragment>
      <Avatar />
      <NotificationIcon />
      <ModalContainer />
    </Fragment>
  );
}

export default App;
