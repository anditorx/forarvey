import {combineReducers} from 'redux';
import {userReducer, tokenReducer} from './auth';
import {globalReducer} from './global';
import {invoiceReducer} from './transaction';

const reducer = combineReducers({
  userReducer,
  tokenReducer,
  globalReducer,
  invoiceReducer,
});
export default reducer;
