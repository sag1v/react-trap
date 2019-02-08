import useTrap from "./useTrap";
import PropTypesDisplay from "../PropTypesDisplay";

const Trap = ({ children, ...rest }) => {
  const [trapped, ref] = useTrap({ ...rest });
  return children(trapped, ref);
};

Trap.propTypes = {
  ...PropTypesDisplay.propTypes
};
Trap.defaultProps = PropTypesDisplay.defaultProps;

export default Trap;
