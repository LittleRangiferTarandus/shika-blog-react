import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import loginoutReducer from './reducer/loginoutReducer'
export default createStore(loginoutReducer,applyMiddleware(thunk))