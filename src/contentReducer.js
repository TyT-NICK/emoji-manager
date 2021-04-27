import useHttp from './hooks/useHttp';

const storageName = 'items';

const getItems = async () => {
  const { request } = useHttp();

  if (localStorage.getItem(storageName)) {
    return localStorage.getItem(storageName);
  }

  const res = await request('https://api.github.com/emojis');

  return [...Object.keys(res)].map((key) => (
    {
      name: key,
      imgUrl: res[key],
      isFavorite: false,
      isDeleted: false,
    }
  ));
};

function toggleFavor(state, item) {
  return state.map((x) => (x === item ? { ...x, isFavorite: !x.isFavorite } : x));
}

function toggleDeletion(state, item) {
  return state.map((x) => (x === item ? { ...x, isDeleted: !x.isDeleted } : x));
}

export const initialState = getItems();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'items/toggleFavor':
      return toggleFavor(state, action.payload);

    case 'items/toggleDeletion':
      return toggleDeletion(state, action.payload);

    default:
      return state;
  }
};
