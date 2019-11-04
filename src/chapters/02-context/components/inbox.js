import React from "react";
import Denied from "./denied";
import Empty from "./empty";
import Preview from "./preview";

import { AppConsumer } from "../context"

export default function Inbox() {
  return (
    <AppConsumer>
      {({ isAuthenticated, emails, removeEmail }) => {
        if (!isAuthenticated) {
          return <Denied />;
        }
      
        if (!emails.length) {
          return <Empty />;
        }
        
        return (
          <ul className="inbox">
            {emails.map(email => {
              return <Preview key={email.id} {...email} removeEmail={removeEmail} />;
            })}
          </ul>
        )
      }}
    </AppConsumer>
  );
}
