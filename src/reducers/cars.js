/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
// eslint-disable-next-line import/no-anonymous-default-export
import {
  FETCH_ALL_CARS,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

export default (cars = [], action) => {
  switch (action.type) {
    case DELETE:
      return cars.filter((car) => car._id !== action.payload);
    case UPDATE:
      return cars.map((car) =>
        car._id === action.payload._id ? action.payload : car
      );
    case UPDATE:
      return cars.map((car) =>
        car._id === action.payload._id ? action.payload : car
      );
    case FETCH_ALL_CARS:
      return action.payload;
    case CREATE:
      return [...cars, action.payload];
    default:
      return cars;
  }
};

// In this file I am going to define my methods and actions of what needs to be done depending on the action I need
// from the backend so lets say if the action is CREATE, then we'll return the either the state or specific code
// relevant to that action.
// In this case my state will be the cars
