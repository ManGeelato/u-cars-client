import React from "react";
import Car from "./Car/Car";
import useStyles from "./CarsStyles";
import { useSelector } from "react-redux";
import {Grid, CircularProgress} from '@material-ui/core';

const Cars = ({setCurrentID}) => {
  const classes = useStyles();
  const cars = useSelector((state) => state.cars);

  console.log(cars);
  return (
    !cars.length ? <CircularProgress  /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {cars.map((car) => (
          <Grid key={car._id} item xs={12} sm={6}>
            <Car car={car} setCurrentID={setCurrentID}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Cars;
// In this file, I am going to feed this component using the redux useSelector function to pass the cars state
