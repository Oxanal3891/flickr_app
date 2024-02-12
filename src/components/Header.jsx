import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/Header.css"
import "../style/Global.css"

function Header() {
  return <>
    <nav className="navbar sticky-top navbar-expand-lg customNav">
      <div className="container-fluid navContain">
        <NavLink 
          to="/"
          end
          className='navbar-brand' 
        >
          <i>ZenArch</i>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills justify-content-end">
            <li className="nav-item">
              <NavLink 
                to="/architecture-app/services"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/architecture-app/inspiration"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Inspiration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/architecture-app/about"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/architecture-app/contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Header;
