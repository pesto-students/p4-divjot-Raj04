import { configureStore } from "@reduxjs/toolkit";
// configureStore
/**
 *
 * @param {*} currentState
 * @param {*} action
 * @returns
 */
function Reducer(currentState = true, action) {
  switch (action.type) {
    case "TOGGLE":
      currentState = !currentState;
      return currentState;
    default:
      return currentState;
  }
}

const store = configureStore({
  reducer: Reducer,
});

export { store };
