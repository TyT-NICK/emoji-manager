import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const NavComponent = (props) => {
  const { label, to } = props;

  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Link className={`waves-effect collection-item ${match ? 'active' : ''}`} to={to} active={match}>{label}</Link>
  );
};

export default NavComponent;
