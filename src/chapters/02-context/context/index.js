import React, { createContext } from "react";
import { fetchEmails, generateEmail } from "../../../utils/email";

export const AppContext = createContext({})

export default class AppProvider extends React.Component {
  state = {
    isAuthenticated: false,
    emails: fetchEmails(5)
  }

  componentDidMount() {
    this.polling = setInterval(() => {
      this.setState(({ emails }) => {
        if (emails.length < 5) {
          return { emails: [...emails, generateEmail()] };
        }
        return {};
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.polling);
  }

  handleLogin = () => this.setState({ isAuthenticated: true })
  handleLogout = () => this.setState({ isAuthenticated: false })

  removeEmail = (id) => 
    this.setState(({ emails }) => {
      const filteredEmails = emails.filter(email => email.id !== id);
      return { emails: filteredEmails };
    });
  

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          login: this.handleLogin,
          logout: this.handleLogout,
          removeEmail: this.removeEmail
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;