export const initializeItems = async (storageName) => {
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

export const ACTION_TYPES = {
  TOGGLE_FAVOR: 'items/toggle-favor',
  TOGGLE_DELETION: 'items/toggle-deletion',
  INIT_ITEMS: 'items/init',
};

const handleActions = {
  [ACTION_TYPES.TOGGLE_FAVOR]:
    (state, item) => state.map((x) => (x === item ? { ...x, isFavorite: !x.isFavorite } : x)),

  [ACTION_TYPES.TOGGLE_DELETION]:
    (state, item) => state.map((x) => (x === item ? { ...x, isDeleted: !x.isDeleted } : x)),

  [ACTION_TYPES.INIT_ITEMS]:
    (_, initItems) => initItems,
};

const contentReducer = () => {
  const initialState = [];

  const reducer = (state, action) => (handleActions[action.type]
    ? handleActions[action.type](state, action.payload)
    : state);

  return [reducer, initialState];
};

export default contentReducer;
