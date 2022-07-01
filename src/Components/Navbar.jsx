import React, { useState } from "react";
import BrandLogo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import menuCloseIcon from "../images/icon-close-menu.svg";
import Menu from "./Modals/Menu";
const Navbar = () => {
  const [iSMenuOpen, setISMenuOpen] = useState(false);
  return (
    <nav id='Navbar' className='Navbar'>
      <img className='Navbar_img' src={BrandLogo} alt='CrowdFund' />
      {iSMenuOpen ? (
        <img
          className='Navbar_menuIcon'
          onClick={() => setISMenuOpen(false)}
          src={menuCloseIcon}
          alt='Close Menu'
        />
      ) : (
        <img
          onClick={() => setISMenuOpen(true)}
          className='Navbar_menuIcon'
          src={menuIcon}
          alt='Open menu'
        />
      )}
      <ul className='Navbar_links'>
        <li className='Navbar_links_li'>About</li>
        <li className='Navbar_links_li'>Discover</li>
        <li className='Navbar_links_li'>Get Started</li>
      </ul>
      {iSMenuOpen && <Menu />}
    </nav>
  );
};

export default Navbar;
