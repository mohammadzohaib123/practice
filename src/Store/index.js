// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import {createLogger} from 'redux-logger';

import DBReducer from './Reducer/DBReducer'
import {DBEpic} from "./Epic/DBEpic";

const loggerMiddleware = createLogger();
// Application Reducers
const rootReducer = combineReducers({
  DBReducer

});

export const rootEpic = combineEpics(
  DBEpic.getOrdersFromFirebase
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware,loggerMiddleware);

export let store = createStore(
  rootReducer,
  createStoreWithMiddleware,
);

