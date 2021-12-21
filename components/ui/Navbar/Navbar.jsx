import Link from "next/link";
import React, { useState, Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state ={clicked:false}
  
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Social Planets</h1>
        <ul className="nav-links">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="nav-linksli">
                <Link href={`${item.url}`} key={index}>
                  <a className="{item.cName}">{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
