import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#0F2537",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection: "column-reverse"
    }
  }
}));

// In this file I am going to add styling for my appBar, heading and image then import to App.js
