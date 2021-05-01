import { createContext } from 'react';

const ContentContext = createContext({
  content: [],
  dispatch: () => null,
});

export default ContentContext;
