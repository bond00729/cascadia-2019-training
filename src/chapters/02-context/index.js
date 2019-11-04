// ####################
//        Context
// ####################

import React from "react";
import NavBar from "./components/navbar";
import Inbox from "./components/inbox";

import AppProvider from "./context"

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <NavBar />
        <Inbox />
      </AppProvider>
    );
  }
}
