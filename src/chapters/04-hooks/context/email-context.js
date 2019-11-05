import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { generateEmail, fetchEmails } from "../../../utils/email";

export const EmailContext = createContext({})

export function EmailProvider({ ...rest }) {
  const [emails, setEmails] = useState(fetchEmails(5));

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

  const removeEmail = useCallback((id) => {
    const filteredEmails = emails.filter(email => {
      return email.id !== id;
    });

    setEmails(filteredEmails);
  }, [emails, setEmails])
  
  const value = useMemo(
    () => ({ emails, removeEmail }),
    [emails, removeEmail]
  )

  return <EmailContext.Provider value={value} {...rest} />;
}

export function useEmail() {}
