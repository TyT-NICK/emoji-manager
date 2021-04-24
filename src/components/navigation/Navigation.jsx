import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Icon, SideNav } from 'react-materialize';

import './navigation.scss';

const NavComponent = (props) => {
  const { label, to } = props;

  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <li className={`${match ? 'active deep-purple lighten-4' : ''}`}>
      <Link className="waves-effect" to={to}>
        {label}
      </Link>
    </li>
  );
};

export const NavButton = () => (
  <a
    href="#!"
    node="button"
    waves="light"
    data-target="sidenav"
    className="hide-on-large-only sidenav-trigger top-nav"
  >
    <Icon center large>
      menu
    </Icon>
  </a>
);

const Navigation = () => {
  const options = {
    edge: 'left',
    inDuration: 150,
    outDuration: 500,
  };

  return (
    <SideNav
      id="sidenav"
      fixed
      options={options}
      // trigger={<NavButton />}
    >
      <NavComponent to="/" label="Все" />
      <NavComponent to="/favorite" label="Любимые" />
      <NavComponent to="/deleted" label="Удаленные" />
    </SideNav>
  );
};

export default Navigation;
