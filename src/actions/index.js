import { CLICK_UPDATE_VALUE, ADD_COUNT } from "./actionTypes";

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const addCount = () => ({
  type: ADD_COUNT
});
