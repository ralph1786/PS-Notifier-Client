import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import psNotifierReducer from "./reducers/psNotifierReducer";

const rootReducer = psNotifierReducer;

//Following code allows the usage of the Redux DevTools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const reduxStore = createStore(rootReducer, enhancer);

export default reduxStore;
