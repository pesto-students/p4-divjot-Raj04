import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto",
    justifyContent: "space-between",
    width: "70%",
    left: 0,
    bottom: 0,
  },
  secondGridColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "end",
    textAlign: "center",
    marginLeft: "50px",
  },
  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginLeft: "600px",
  },
  signup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginLeft: "100px",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Shortly
            </Typography>
          </div>
          <div className={classes.gridContainer}>
            <div className={classes.secondGridColumn}>
              <Link href="#" style={{ color: "#edf0f2" }} underline="none">
                Features
              </Link>
            </div>
            <div className={classes.secondGridColumn}>
              <Link href="#" style={{ color: "#edf0f2" }} underline="none">
                Pricing
              </Link>
            </div>
            <div className={classes.secondGridColumn}>
              <Link href="#" style={{ color: "#edf0f2" }} underline="none">
                Resources
              </Link>
            </div>
          </div>
          <div className={classes.gridContainer}>
            <div className={classes.login}>
              <Link href="#" style={{ color: "#edf0f2" }} underline="none">
                Login
              </Link>
            </div>
            <div className={classes.signup}>
              <Link href="#" style={{ color: "#edf0f2" }} underline="none">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
