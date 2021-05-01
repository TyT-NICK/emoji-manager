import React, { useContext } from 'react';
import ContentContext from '../contexts/contentContext';
import Page from './Page';

const PageFav = () => {
  const { content, dispatch } = useContext(ContentContext);
  console.log(content);

  return (
    <Page title="Любимые">
      fav
    </Page>
  );
};

export default PageFav;
