import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/blankStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
     
    </div>
  );
}
