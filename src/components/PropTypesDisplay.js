/* eslint react/no-unused-prop-types: "off" */
import React from "react";
import PropTypes from "prop-types";

/**
 * This component is created and used only for sharing the propTypes and defaultProps with Trap, useTrap & docz (<PropsTable/>)
 * We use a class component instead of a plain object because docz <PropsTable/> requires a class component.
 */

class PropTypesDisplay extends React.Component {
  render() {
    return "";
  }
}

PropTypesDisplay.propTypes = {
  /** (not required for useTrap) children as function: (trapped, ref) => <YourComponent ... /> */
  children: PropTypes.func.isRequired,
  /** DOM event to habdle both in and out events */
  event: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** DOM event just for the focus, working in combination with the off prop  */
  on: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** DOM event just for the blur, working in combination with the on prop  */
  off: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** This will prevent the default (only if the state has changed) */
  preventDefault: PropTypes.bool
};

PropTypesDisplay.defaultProps = {
  event: "click",
  on: "",
  off: "",
  preventDefault: false
};

export default PropTypesDisplay;
