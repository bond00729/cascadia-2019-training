import React, { createContext, useState, useEffect } from "react";
import { generateEmail, emails as mockData } from "../../../utils/email";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

const AppProvider = ({ isAuth, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuth || false);
  const [emails, setEmails] = useState(mockData);

  useEffect(() => {
    const polling = setInterval(() => {
      if (emails.length < 5) {
        setEmails([...emails, generateEmail()]);
      }
    }, 4000);

    return () => {
      clearInterval(polling);
    }
  }, [emails])

  const removeEmail = id => {
    const filteredEmails = emails.filter(email => {
      return email.id !== id;
    });

    setEmails(filteredEmails);
  };
  
  const value = {
    isAuthenticated: isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
    emails: emails,
    removeEmail: removeEmail
  };

  return <AppContext.Provider value={value} {...rest} />;
}

export default AppProvider
