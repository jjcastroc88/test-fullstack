import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";

const Block = attributes => {
  const {data, hash, index} = attributes;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{index}</div>
      <div className={classes.description}>{data + "-" + hash}</div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    background: "rgba(0, 0, 0, 0.12)",
    borderRadius: "2px",
    marginBottom: "4px",
    padding: "8px",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#304FFE",
  },
  description: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#263238",
  }
}))

Block.prototypes = {
  attributes: PropTypes.shape({
    data: PropTypes.string,
    hash: PropTypes.string,
    index: PropTypes.number,
  }).isRequired
}

export default Block;