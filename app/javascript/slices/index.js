import { combineReducers } from '@reduxjs/toolkit';
import editorReducer, { actions as editorActions } from './editorSlice.js';
import terminalReducer, { actions as terminalActions, runCode } from './terminalSlice.js';


export const rootReducer = combineReducers({
  editor: editorReducer,
  terminal: terminalReducer,
});

export const setupState = (gon) => (dispatch) => {
  dispatch(editorActions.changeLanguage(gon.language));
};

export const actions = {
  ...editorActions,
  ...terminalActions,
  runCode,
};
