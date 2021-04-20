import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const NavComponent = (props) => {
  const { label, to, activeOnlyWhenExact } = props;

  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link className={`collection-item ${match ? 'active' : ''}`} to={to} active={match}>{label}</Link>
  );
};

export default NavComponent;
