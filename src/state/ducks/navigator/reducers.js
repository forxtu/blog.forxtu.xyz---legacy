// const navigatorReducer = (state = { initialState }, action) => {
//   switch (action.type) {
//     case types.SET_NAVIGATOR_POSITION:
//       return {
//         ...state,
//         navigatorPosition: action.val
//       };

//     case types.SET_NAVIGATOR_SHAPE:
//       return {
//         ...state,
//         navigatorShape: action.val
//       };

//     case types.SET_NAVIGATOR_FILTER:
//       return {
//         ...state,
//         navigatorFilter: action.val
//       };

//     default:
//       return state;
//   }
// };

import * as types from './types';
import createReducer from '../../utils/createReducer';

const initialState = {
  navigatorPosition: 'is-aside',
  navigatorShape: 'open',
  navigatorFilter: ''
};

const navigatorReducer = createReducer(initialState)({
  [types.SET_NAVIGATOR_POSITION]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      navigatorPosition: val
    };
  },
  [types.SET_NAVIGATOR_SHAPE]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      navigatorShape: val
    };
  },
  [types.SET_NAVIGATOR_FILTER]: (state, action) => {
    const { val } = action;
    return {
      ...state,
      navigatorFilter: val
    };
  }
});

export default navigatorReducer;
