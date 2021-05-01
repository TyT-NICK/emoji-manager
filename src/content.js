const storageName = 'items';

// TODO: remove export
export const getItems = async () => {
  if (localStorage.getItem(storageName)) {
    return JSON.parse(localStorage.getItem(storageName));
  }

  const response = await fetch('https://api.github.com/emojis');
  const res = await response.json();

  return [...Object.keys(res)].map((key) => (
    {
      name: key,
      imgUrl: res[key],
      isFavorite: false,
      isDeleted: false,
    }
  ));
};

const contentReducer = () => {
  function toggleFavor(state, item) {
    return state.map((x) => (x === item ? { ...x, isFavorite: !x.isFavorite } : x));
  }

  function toggleDeletion(state, item) {
    return state.map((x) => (x === item ? { ...x, isDeleted: !x.isDeleted } : x));
  }

  const initialState = [];
  // const initialState = getItems();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'items/toggleFavor':
        return toggleFavor(state, action.payload);

      case 'items/toggleDeletion':
        return toggleDeletion(state, action.payload);

      case 'items/init':
        return action.payload;

      default:
        return state;
    }
  };

  return [reducer, initialState];
};

export default contentReducer;
