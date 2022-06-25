import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";

import loginoutReducer from './reducer/loginoutReducer'
import tokenReducer from './reducer/tokenReducer'
let reducer = combineReducers({
  userInfo : loginoutReducer,
  token:tokenReducer
})
export default createStore(reducer,applyMiddleware(thunk))