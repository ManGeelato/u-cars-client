import * as api from "../api";
import { CREATE, FETCH_ALL_CARS, UPDATE, DELETE  } from "../constants/actionTypes";

export const getAllCars = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllCars();
    dispatch({ type: FETCH_ALL_CARS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewCar = (car) => async (dispatch) => {
  try{
    const {data} = await api.addNewCar(car);
    dispatch({type: CREATE, payload:data});

  }catch(error){
    console.log(error.message);
  }
}

export const updateCar = (id, car) => async (dispatch) => {
  try{
    const {data} = await api.updateCar(id, car);

    dispatch({type: UPDATE, payload: data});

  }catch(error){
    console.log(error);
  }
}

export const likeCar = (id) => async (dispatch) => {
  try{
    const {data} = await api.likeCar(id);

    dispatch({type: UPDATE, payload: data});
  }catch(error){
    console.log(error);
  }
}

export const deleteCar = (id) => async (dispatch) => {
  try{
    await api.deleteCar(id);
    dispatch({type: DELETE, payload:id});
  }catch(error){
    console.log(error);
  }
}


// In this file, I am utilizing the api functionality by creating methods that perfrom the necessary actions the user
// will request.
// Firstly, I imported all from api then I define my methods calling the api functions via api.addNewCar or api.getAllCars etc.
// I am also using async and await since all this data is going or coming from the database 
// After receiving the data from the server or client side, we dispatch the action and the payload 
// I also imported my action types from actionTypes.js sitting in constants folder so as to keep my code clean