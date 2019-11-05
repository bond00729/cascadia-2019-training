import React from "react";
import { useAuth } from "../context/auth-context";
import { useEmail } from "../context/email-context";
import Denied from "./denied";
import Empty from "./empty";
import Preview from "./preview";
import EmailError from "./email-error";

const Inbox = () => {
  const { isAuthenticated } = useAuth();
  const { emails, removeEmail } = useEmail();

  if (!isAuthenticated) {
    return <Denied />;
  }

  if (!emails.length) {
    return <Empty />;
  }

  return (
    <ul className="inbox">
      {emails.map(email => {
        return (
          <EmailError key={email.id} onClear={() => removeEmail(email.id)}>
            <Preview {...email} />
          </EmailError>
        );
      })}
    </ul>
  );
};

export default Inbox