// ####################
//       State
// ####################

import React, { Component } from "react";
import NavBar from "./components/navbar";
import Inbox from "./components/inbox";
import { generateEmail, fetchEmails } from "../../utils/email";

export default class App extends Component {
  state = {
    isAuthenticated: false,
    emails: fetchEmails(5)
  }

  componentDidMount() {
    this.getNewMail = setInterval(() => {
      this.setState(({ emails }) => {
        return { emails: [...emails, generateEmail()] };
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.getNewMail);
  }

  login = () => {
    this.setState({ isAuthenticated: true });
  }

  logout = () => {
    this.setState({ isAuthenticated: false });
  }

  removeEmail = (id) => {
    this.setState(({ emails }) => {
      const filteredEmails = emails.filter(email => email.id !== id);
      return { emails: filteredEmails };
    });
  }

  render() {
    const { isAuthenticated, emails } = this.state;

    return (
      <>
        <NavBar
          isAuthenticated={isAuthenticated}
          login={this.login}
          logout={this.logout}
        />
        <Inbox
          isAuthenticated={isAuthenticated}
          emails={emails}
          removeEmail={this.removeEmail}
        />
      </>
    );
  }
}
