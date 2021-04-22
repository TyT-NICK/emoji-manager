import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useRouteMatch } from 'react-router-dom';
import { Icon, SideNav } from 'react-materialize';

const NavComponent = (props) => {
  const { label, to } = props;

  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <li className={`${match ? 'active' : ''}`}>
      <Link className="waves-effect" to={to} active={match}>
        {label}
      </Link>
    </li>
  );
};

const NavButton = () => {
  const sideButton = document.createElement('div');

  useEffect(() => {
    const sideButtonArea = document.getElementById('mobile-nav-button');
    sideButtonArea.appendChild(sideButton);
  }, []);

  const elem = (
    <a
      href="#!"
      node="button"
      waves="light"
      data-target="side-nav"
      className="hide-on-large-only sidenav-trigger top-nav"
    >
      <Icon left>
        menu
      </Icon>
    </a>
  );

  return (
    ReactDOM.createPortal(elem, sideButton)
  );
};

const Navigation = () => {
  const options = {
    edge: 'left',
    inDuration: 150,
    outDuration: 500,
  };

  return (
    <SideNav
      id="side-nav"
      fixed
      options={options}
      trigger={<NavButton />}
    >
      <NavComponent to="/" label="Все" />
      <NavComponent to="/favorite" label="Любимые" />
      <NavComponent to="/deleted" label="Удаленные" />
    </SideNav>
  );
};

export default Navigation;
