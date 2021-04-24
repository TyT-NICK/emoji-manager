import React from 'react';
import Header from '../components/header/Header';

const Page = (props) => {
  const { title, children } = props;

  return (
    <>
      <Header title={title} />
      <main>
        {children}
      </main>
    </>
  );
};

export default Page;
