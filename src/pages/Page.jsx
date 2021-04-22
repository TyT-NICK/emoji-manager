import React from 'react';
import Header from '../components/Header';

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
