import React, { useState, useEffect } from "react";
import useStyles from "./FormStyles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { addNewCar, updateCar } from "../../actions/cars";

const Form = ({ currentID, setCurrentID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [carObjectData, setCarObjectData] = useState({
    model: Number,
    make: "",
    cost: Number,
    selectedImage: "",
    r_Number: "",
    owner: "",
    address: "",
  });
  const car = useSelector((state) =>
    currentID ? state.cars.find((car) => car._id === currentID) : null
  );

  useEffect(() => {
    if (car) setCarObjectData(car);
  }, [car]);

  const handleCarSubmit = (e) => {
    e.preventDefault();

    if (currentID) {
      dispatch(updateCar(currentID, carObjectData));
    } else {
      dispatch(addNewCar(carObjectData));
    }
    cancelSubmit();
  };

  const cancelSubmit = () => {
    setCurrentID(null);
    setCarObjectData({
      model: Number,
      make: "",
      cost: Number,
      selectedImage: "",
      r_Number: "",
      owner: "",
      address: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleCarSubmit}
        autoComplete="off"
      >
        <Typography variant="h5">{currentID ? "Edit" : "New"} Car</Typography>
        <TextField
          name="model"
          variant="outlined"
          label="Car Model"
          fullWidth
          type="number"
          value={carObjectData.model}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, model: e.target.value })
          }
        />
        <TextField
          name="make"
          variant="outlined"
          label="Car Make"
          fullWidth
          value={carObjectData.make}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, make: e.target.value })
          }
        />
        <TextField
          name="cost"
          variant="outlined"
          label="Car Cost"
          fullWidth
          type="number"
          value={carObjectData.cost}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, cost: e.target.value })
          }
        />
        <TextField
          name="r_Number"
          variant="outlined"
          label="Car Registration"
          fullWidth
          value={carObjectData.r_Number}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, r_Number: e.target.value })
          }
        />
        <TextField
          name="owner"
          variant="outlined"
          label="Car Owner"
          fullWidth
          value={carObjectData.owner}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, owner: e.target.value })
          }
        />
        <TextField
          name="address"
          variant="outlined"
          label="Owner Address"
          fullWidth
          value={carObjectData.address}
          onChange={(e) =>
            setCarObjectData({ ...carObjectData, address: e.target.value })
          }
        />
        <div className={classes.selectedImage}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setCarObjectData({ ...carObjectData, selectedImage: base64 })
            }
          />
        </div>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="secondary"
          size="small"
          onClick={cancelSubmit}
          fullWidth
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

// In this file, We're going to show to the user the page they will use to submit a new car.
// I used material/core to design a nice looking form with all the fields we need from car model, image, make etc.
// For converting picture to a string, I used react's react-file base64 import to convert image into string type
// So now a user will enter all the details required for a new car, thereafter they will then click on submit and when they click
// the submit button, the form has been binded by method handleCarSubmit which then calls dispatch and pass the function
// addNewCar from our actions. This then according to the correct action 'CREATE', will send the payload via the state we
// created called carObjectData that contains all the form fields.
// Just like that, the data is sent to the backend
