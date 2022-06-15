import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundBlendMode: "darken",
  },
  topDetails:{
    color: "#220000"
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  grid: {
    display: "flex",
  },
  firstOverlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  secondOverlay: {
    top: "20px",
    right: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  deleteIcon:{
    color: "#FF0000"
  },
  editIcon:{
    color:"#3F51B5"
  }
});

// These the styles for the Car component
