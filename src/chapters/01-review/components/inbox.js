import React from "react";

import Empty from "./empty";
import Preview from "./preview";
import Denied from "./denied";

export default function Inbox({ isAuthenticated, emails, removeEmail }) {
  if (!isAuthenticated) {
    return <Denied />
  }

  if (!emails.length) {
    return <Empty />;
  }

  return (
    <ul className="inbox">
      {emails.map(email => {
        return <Preview key={email.id} {...email} handleRemove={removeEmail} />;
      })}
    </ul>
  );
}
