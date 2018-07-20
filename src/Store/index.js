import { combineReducers, createStore, applyMiddleware} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import {createLogger} from 'redux-logger';
import reducer from "./Reducer/reducer";
import {Epic} from "./Epic/Epic";
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  reducer
});
export const rootEpic = combineEpics(
    Epic.getOrdersFromFirebase,Epic.setStatusOnFirebase
  );
const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware,loggerMiddleware);
  
export let store = createStore(
    rootReducer,
    createStoreWithMiddleware,
  );