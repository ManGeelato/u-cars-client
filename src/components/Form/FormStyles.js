import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  selectedImage: {
    width: "97%",
    margin: "10px 0",
  },
  submitButton: {
    marginBottom: 15,
  },
}));

// These are the styles for the Form page
