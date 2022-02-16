import { combineReducers } from 'redux';

import uiReducer from './UI/ui-slice';

export default combineReducers({
  ui: uiReducer,
});
