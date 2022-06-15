import { combineReducers } from "redux";

import cars from './cars';

export default combineReducers({cars})

// In this file, I am going to export the cars because we need to feed the Cars.js using redux's useSelector fucntion
// I first import combineReducers from redux, then import the actions from cars.js under reducers. I then pass those actions
// as an object to combineReducers function