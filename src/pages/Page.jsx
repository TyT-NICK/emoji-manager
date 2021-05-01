import React from 'react';
import Header from '../components/header/Header';

const Page = (props) => {
  const { title, children, onSearch } = props;

  return (
    <>
      <Header title={title} onSearchChange={onSearch} />
      <main>
        {children}
      </main>
    </>
  );
};

export default Page;
