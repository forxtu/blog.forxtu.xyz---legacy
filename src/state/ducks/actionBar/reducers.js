import * as types from './types';

import createReducer from '../../utils/createReducer';

const initialState = {
  isWideScreen: false,
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: 'all posts'
};

const actionBarReducer = createReducer(initialState)({
  [types.SET_IS_WIDE_SCREEN]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      isWideScreen: val
    };
  },
  [types.SET_SCROLL_TO_TOP]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      scrollToTop: val
    };
  },
  [types.SET_FONT_SIZE_INCREASE]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      fontSizeIncrease: val
    };
  },
  [types.SET_CATEGORY_FILTER]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      categoryFilter: val
    };
  }
});

export default actionBarReducer;
