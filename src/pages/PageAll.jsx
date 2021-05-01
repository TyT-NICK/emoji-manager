import React, { useContext } from 'react';
import { Preloader } from 'react-materialize';
import ContentContext from '../contexts/contentContext';
import Page from './Page';

const PageAll = () => {
  const { content, dispatch } = useContext(ContentContext);
  console.log(content);

  return (
    <Page title="Все">
      {
      content.length
        ? content.map((x) => <p key={x.name}>{x.imgUrl}</p>)
        : <Preloader />
      }
    </Page>
  );
};

export default PageAll;
