import React from "react";
import PropTypes from "prop-types";

const style = isFocused => ({
  display: "flex",
  padding: "25px",
  justifyContent: "center",
  color: "#fff",
  backgroundColor: isFocused ? "#4caf50" : "#e91e63",
  userSelect: "none",
  cursor: "pointer"
});

const Box = ({ isFocused, innerRef }) => (
  <div ref={innerRef} style={style(isFocused)}>
    {isFocused ? "I'm focused" : "I'm out of focus"}
  </div>
);

Box.propTypes = {
  isFocused: PropTypes.bool,
  innerRef: PropTypes.func.isRequired
};

export default Box;
