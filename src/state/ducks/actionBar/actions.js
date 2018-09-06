import * as types from './types';

export function setIsWideScreen(val) {
  return { type: types.SET_IS_WIDE_SCREEN, val };
}

export function setScrollToTop(val) {
  return { type: types.SET_SCROLL_TO_TOP, val };
}

export function setFontSizeIncrease(val) {
  return { type: types.SET_FONT_SIZE_INCREASE, val };
}

export function setCategoryFilter(val) {
  return { type: types.SET_CATEGORY_FILTER, val };
}
