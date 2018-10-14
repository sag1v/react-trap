import { Component } from "react";
import PropTypes from "prop-types";
import invariant from "invariant";

class Trap extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    event: PropTypes.string.isRequired
  };

  state = {
    trapped: false
  };

  componentDidMount() {
    const { event } = this.props;
    event.split(" ").forEach(evt => {
      document.addEventListener(evt, this.handleEvent);
    });
  }

  componentWillUnmount() {
    const { event } = this.props;
    event.split(" ").forEach(evt => {
      document.removeEventListener(evt, this.handleEvent);
    });
  }

  handleEvent = ({ target }) => {
    invariant(
      this.ref && this.ref.contains,
      "A ref is required, did you forgot to use it?"
    );
    const trapped = this.ref.contains(target);
    this.setState({ trapped });
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
