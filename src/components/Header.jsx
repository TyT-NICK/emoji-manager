import React from 'react';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <div id="mobile-nav-button" />
          <a href="#!" className="brand-logo">{title}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
