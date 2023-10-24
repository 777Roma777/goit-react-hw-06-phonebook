import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactDataReducer } from './contactDataReducer';

const rootReducer = combineReducers({
  contactData: contactDataReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
