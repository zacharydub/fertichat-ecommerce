import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  button: {
    marginTop: "50px",
    marginLeft: "40%",
    "&:hover, &:focus": {
      color: "green",
      backgroundColor: "lightblue",
    },
  },
}));
