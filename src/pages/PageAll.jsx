import React from 'react';
import { Col, Navbar, Row } from 'react-materialize';
import { NavContent } from '../components/Navigation';

const Page = (props) => {
  const { title, children } = props;

  const brand = <p className="brand-logo">{title}</p>;
  return (
    <div className="container">
      <header />
      <main className="">
        {children}
      </main>
    </div>
  );
};

export default Page;
