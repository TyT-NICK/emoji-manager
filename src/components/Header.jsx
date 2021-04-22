import React from 'react';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div id="mobile-nav-button" />
      {title}
    </header>
  );
};
export default Header;
