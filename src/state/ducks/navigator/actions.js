import * as types from './types';

export function setNavigatorPosition(val) {
  return { type: types.SET_NAVIGATOR_POSITION, val };
}

export function setNavigatorShape(val) {
  return { type: types.SET_NAVIGATOR_SHAPE, val };
}

export function setNavigatorFilter(val) {
  return { type: types.SET_NAVIGATOR_FILTER, val };
}
