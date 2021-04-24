import React from 'react';
import { TextInput } from 'react-materialize';
import { NavButton } from '../navigation/Navigation';

import './header.scss';

const Header = (props) => {
  const { title, onSearchChange } = props;
  return (
    <header>
      <nav className="nav-extended transparent">
        <div className="nav-wrapper row">
          <div className="col s12 l7 offset-l1">
            <NavButton />
            <span className="brand-logo">{title}</span>
          </div>
          <div className="col s10 l3 offset-s1">
            <TextInput id="search__input" placeholder="искать..." s={12} onChange={onSearchChange} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
