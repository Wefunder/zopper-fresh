// The boilerplate for the navbar done for you. As usual, you will need to modify
// it to do what you need!

import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar is-info is-mobile">
      <div className="navbar-brand">
        <a className="navbar-item">Zopper</a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Cart</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">User Name</a>
        </div>
      </div>
    </nav>
  )
}
