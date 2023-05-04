import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../Data";
import "../components/Navbar.css";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu" onClick={() => setShowMenu(!showMenu)}>
        <span>{showMenu ? <MdClose /> : <MdMenu />}</span>
      </div>
    </nav>
  );
};

export default Navbar;
