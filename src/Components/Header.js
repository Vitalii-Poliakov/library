import React, { useState } from 'react';
import Navigation from './Navigation.js';
import { CgMenu } from 'react-icons/cg';
import { ImLibrary } from 'react-icons/im';
import { CgClose } from 'react-icons/cg';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function Header() {
  const [menuState, showMenu] = useState(false);
  let menu_icon = (
    <CgMenu className='menu-icon' onClick={() => showMenu(!menuState)} />
  );
  let header_class = 'header-main';

  const transitions = useTransition(menuState, null, {
    from: { top: '-100%' },
    enter: { top: '0px' },
    leave: { top: '-100%' },
  });

  if (menuState) {
    header_class = '';
    menu_icon = (
      <CgClose className='menu-icon' onClick={() => showMenu(!menuState)} />
    );
  }

  return (
    <div>
      <header className={header_class}>
        <div className='icon-placeholder'></div>
        <Link to='/library' className='logo' onClick={() => showMenu(false)}>
          <ImLibrary className='logo-icon' />
          <div className='logo-text'>Library</div>
        </Link>
        <div className='menu-icon-placeholder'>
          <div className='desktop-menu'>
            <Navigation closeMenu={() => showMenu(false)} />
          </div>
          {menu_icon}
        </div>
      </header>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props} className='menu'>
              <Navigation closeMenu={() => showMenu(false)} />
            </animated.div>
          )
      )}
    </div>
  );
}

export default Header;
