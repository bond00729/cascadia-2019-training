import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { EmailContext } from "../context/email-context";
import Denied from "./denied";
import Empty from "./empty";
import Preview from "./preview";
import EmailError from "./email-error";

const Inbox = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { emails, removeEmail } = useContext(EmailContext);

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