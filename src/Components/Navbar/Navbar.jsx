import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavCss from './Navbar.module.css';

export default class Navbar extends Component {

  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg ${NavCss.navColor} p-4 fixed-top`}>
          <div className="container">
            <a className={NavCss.navbarBrand} href="#">START REACT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  className="nav-link" aria-current="page" to=''>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='portfolio'>PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='about'>ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='contact'>CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </>
    )
  }
}
