import React from 'react';
import { Button, Collection, SideNav } from 'react-materialize';
import NavComponent from './NavComponent';

export const NavContent = () => (
  <Collection>
    <NavComponent to="/" label="Все" />
    <NavComponent to="/favorite" label="Любимые" />
    <NavComponent to="/deleted" label="Удаленные" />
  </Collection>
);

const Navigation = () => {
  const options = {
    edge: 'left',
    inDuration: 150,
    outDuration: 500,
  };

  return (
    <SideNav
      fixed
      options={options}
      trigger={<Button node="button">SIDE NAV DEMO</Button>}
    >
      <NavContent />
    </SideNav>
  );
};
export default Navigation;
