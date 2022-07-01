import React from "react";
import { createPortal } from "react-dom";
const Menu = () => {
  return createPortal(
    <>
      <div className='drop_shadow'></div>
      <div id='Menu' className='Menu'>
        <ul className='Menu_Links'>
          <li>About</li>
          <li>Discover</li>
          <li>Get started</li>
        </ul>
      </div>
    </>,

    document.getElementById("menu")
  );
};

export default Menu;
