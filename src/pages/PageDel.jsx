import React, { useContext } from 'react';
import ContentContext from '../contexts/contentContext';
import Page from './Page';

const PageDel = () => {
  const { content, dispatch } = useContext(ContentContext);
  console.log(content);

  return (
    <Page title="Удаленные">
      del
    </Page>
  );
};

export default PageDel;
