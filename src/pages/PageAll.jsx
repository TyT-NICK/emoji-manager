import React, { useContext } from 'react';
import Page from './Page';

const PageAll = () => {
  const handleItemClick = (e) => {
    const { id } = e.target;

    console.log(id);
  };

  return (
    <Page title="Все">
      1
    </Page>
  );
};

export default PageAll;
