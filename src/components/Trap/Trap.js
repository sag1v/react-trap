import { Component } from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import { asArray } from "../../helpers";

class Trap extends Component {
  static propTypes = {
    /** children as function: (trapped, ref) => <YourComponent ... /> */
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

  static defaultProps = {
    event: "click",
    on: "",
    off: "",
    preventDefault: false
  };

  state = {
    trapped: false
  };

  componentDidMount() {
    const { event, on, off } = this.props;
    invariant(
      this.ref && this.ref.contains,
      "A ref is required, did you forgot to use it?"
    );
    if (on && off) {
      asArray(on).forEach(evt => {
        document.addEventListener(evt, this.handleFocusEvent, {
          detail: { reactTrap: true }
        });
      });
      asArray(off).forEach(evt => {
        document.addEventListener(evt, this.handleBlurEvent, {
          detail: { reactTrap: true }
        });
      });
    } else {
      asArray(event).forEach(evt => {
        document.addEventListener(evt, this.handleEvent, {
          detail: { reactTrap: true }
        });
      });
    }
  }

  componentWillUnmount() {
    const { event, on, off } = this.props;

    if (on && off) {
      asArray(on).forEach(evt => {
        document.removeEventListener(evt, this.handleFocusEvent);
      });
      asArray(off).forEach(evt => {
        document.removeEventListener(evt, this.handleBlurEvent);
      });
    } else {
      asArray(event).forEach(evt => {
        document.removeEventListener(evt, this.handleEvent);
      });
    }
  }

  preventDefaultHelper = (e, nextTrapped) => {
    const { preventDefault } = this.props;
    const { trapped } = this.state;
    if (trapped !== nextTrapped && preventDefault) {
      e.preventDefault();
    }
  };

  handleEvent = e => {
    const trapped = this.ref.contains(e.target);
    this.preventDefaultHelper(e, trapped);
    this.setState({ trapped });
  };

  handleFocusEvent = e => {
    const trapped = this.ref.contains(e.target);
    this.preventDefaultHelper(e, trapped);
    if (trapped) {
      this.setState({ trapped: true });
    }
  };

  handleBlurEvent = e => {
    const trapped = this.ref.contains(e.target);
    this.preventDefaultHelper(e, trapped);
    if (!trapped) {
      this.setState({ trapped: false });
    }
  };

  render() {
    const { children } = this.props;
    const { trapped } = this.state;
    invariant(
      typeof children === "function",
      'The "children" prop must be a function'
    );
    return children(trapped, ref => (this.ref = ref));
  }
}

export default Trap;
