import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

let state = {
  user: null,
  token: null,
  isComponentVisible: false
}

export const setUser = createAction('SET_USER');
export const toggleVue = createAction('TOGGLE_VUE');
export const setToken = createAction('SET_TOKEN');
export const updateUser = createAction('UPDATE_USER');
export const logoutUser = createAction('LOGOUT_USER');

const reducer = createReducer(state, builder => {
  builder
    .addCase(setUser, (currentState, action) => {
      return { ...currentState, user: action.payload };
    })
    .addCase(toggleVue, currentState => {
      return { ...currentState, isComponentVisible: !currentState.isComponentVisible };
    })
    .addCase(setToken, (currentState, action) => {
      return { ...currentState, token: action.payload };
    })
    .addCase(updateUser, (currentState, action) => {
      return {
        ...currentState,
        user: {
          ...currentState.user,
          firstName: action.payload.firstname,
          lastName: action.payload.lastname
        }
      };
    })
    .addCase(logoutUser, currentState => {
      currentState.user = null;
      return { ...currentState };
    });
});

export const store = configureStore(
  {
    preloadedState: state,
    reducer
  }
)