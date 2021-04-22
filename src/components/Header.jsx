import React from 'react';
import { NavButton } from './Navigation';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <NavButton />
      {title}
    </header>
  );
};
export default Header;
