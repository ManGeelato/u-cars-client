import axios from 'axios';

export const serverURL = 'https://u-cars.herokuapp.com/cars';

export const fetchAllCars = () => axios.get(serverURL);
export const addNewCar = (newCar) => axios.post(serverURL, newCar);
export const updateCar = (id, updatedCar) => axios.patch(`${serverURL}/${id}`, updatedCar);
export const likeCar = (id) => axios.patch(`${serverURL}/${id}/likeCar`);
export const deleteCar = (id) => axios.delete(`${serverURL}/${id}`);

// In this file, I am communicating with my backend application via axios. First I import axios, then create my server
// variable pointing to that backend url. I then use axios.get to retrive all the cars in the server. 
// So the methods I defined here will be utilized in car.js sitting in actions where we'll be dispatching the actions 
// depending on what the user wants to do. These actions will be executed via api.fetchAllCars or api.addNewCar etc 
// For this application, I am gonna utilise Redux for the facilitation of my api requests. This is so because as the 
// application might grow, We won't have problems with scalability issues

//After deployment to Heroku, I then added a new live url that works from Heroku
