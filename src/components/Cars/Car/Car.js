import React from "react";
import useStyles from "./CarStyles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteCar, likeCar } from "../../../actions/cars";

const Car = ({ car, setCurrentID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={car.selectedImage} />
      <div className={classes.firstOverlay}>
        <Typography className={classes.topDetails} variant="h6">
          {car.make}
        </Typography>
        <Typography className={classes.topDetails} variant="body2">
          {moment(car.createdAt).fromNow()}
        </Typography>
      </div>
      
      <div className={classes.details}>
        <Typography variant="h6">Model: {car.model}</Typography>
        <Typography variant="h6">Cost: {car.cost}</Typography>
      </div>
      <CardContent>
        <h3 className={classes.title}>Other Details: </h3>
        <Typography
          className={classes.title}
          variant="h6"
          color="textSecondary"
        >
          Registration: {car.r_Number.toUpperCase()}
        </Typography>
        <Typography
          className={classes.title}
          variant="h6"
          color="textSecondary"
        >
          Owner: {car.owner}
        </Typography>
        <Typography
          className={classes.title}
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          Address: {car.address}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeCar(car._id))}
        >
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {car.likeCount}
        </Button>
        <div className={classes.secondOverlay}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentID(car._id)}
        >
          <EditIcon fontSize="medium" className={classes.editIcon} />
        </Button>
      </div>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteCar(car._id))}
        >
          <DeleteIcon fontSize="small" className={classes.deleteIcon} />
          &nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};

export default Car;

// In this file, we are dealing with items of one car.Then we'll import this file in the Cars component. Basically
// I need to be able to display multiple cars hence I have one file that does this
