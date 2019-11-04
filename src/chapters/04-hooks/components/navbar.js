import React, { useContext } from "react";
import { Link } from "@reach/router";
import { AppContext } from "../context";

export default function NavBar() {
  const {
    isAuthenticated,
    login,
    logout
  } = useContext(AppContext)

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1 className="nav-logo">Formidamail</h1>
      </Link>
      <ul className="nav-items">
        {isAuthenticated ? (
          <li className="nav-item" onClick={logout}>
            logout
          </li>
        ) : (
          <li className="nav-item" onClick={login}>
            Log in
          </li>
        )}
      </ul>
    </nav>
  );
}
