import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import displayPicture from "./components/Images/Capture.PNG";
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import useStyles from "./appStyles";
import "./background.css";
import { useDispatch } from "react-redux";
import { getAllCars } from "./actions/cars";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    dispatch(getAllCars());
  }, [currentID, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h4" align="center" className={classes.heading}>
          U-CARS
        </Typography>
        <img
          src={displayPicture}
          alt="displayPicture"
          height="90"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Cars setCurrentID={setCurrentID}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
// In this file, this is where most the components are being called from. Firstly I installed material/core for my styles.
// I then created my Container in which the AppBar and my image will sit.
// I added a display displayPicture and a heading called U-Cars for my application.
// I then added another container whhich is divided into two for the Grid and Form
// The Grid will show available cars in the model and the form will be used to add new cars to the model
// For styling, I created a file called appStyles.js that is based on material/core style guide.
// I then imported it and created a variable called classes that I will use to directly target my classnames
// For the background of my application,  I downloaded a theme called bootswatch then created a file
// called background.css then imported it in my app.js
// Now to dispatch redux functionality, I imported the useDispatch so I will be able to use redux in my application.
// I then imported my functions that use redux, like getAllCars, addCar and so on from redux actions then use useEffect
// to dispatch my functions
