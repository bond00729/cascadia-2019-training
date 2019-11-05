import React from "react";
import { AuthProvider } from "./auth-context"
import { EmailProvider } from "./email-context"

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <EmailProvider>
        {children}
      </EmailProvider>
    </AuthProvider>
  );
}

export default AppProvider
