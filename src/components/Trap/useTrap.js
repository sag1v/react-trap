import { useRef, useState, useEffect } from "react";
import invariant from "invariant";
import { asArray } from "../../helpers";
import PropTypesDisplay from "../PropTypesDisplay";

const useTrap = ({ event, on, off, preventDefault }) => {
  const [trapped, setTrapped] = useState(false);
  const ref = useRef(null);
  const setRef = node => (ref.current = node);

  useEffect(() => {
    invariant(!!ref.current, "A ref is required, did you forgot to use it?");
  });

  useEffect(
    () => {
      if (on && off) {
        // we got seperate events for focus and blur
        asArray(on).forEach(evt => {
          document.addEventListener(evt, handleFocusEvent, {
            detail: { reactTrap: true }
          });
        });
        asArray(off).forEach(evt => {
          document.addEventListener(evt, handleBlurEvent, {
            detail: { reactTrap: true }
          });
        });
      } else {
        // signle event to rule them all!
        asArray(event).forEach(evt => {
          document.addEventListener(evt, handleEvent, {
            detail: { reactTrap: true }
          });
        });
      }

      return () => {
        // cleanup
        if (on && off) {
          asArray(on).forEach(evt => {
            document.removeEventListener(evt, handleFocusEvent);
          });
          asArray(off).forEach(evt => {
            document.removeEventListener(evt, handleBlurEvent);
          });
        } else {
          asArray(event).forEach(evt => {
            document.removeEventListener(evt, handleEvent);
          });
        }
      };
    },
    // re-run on ref event, on, off, preventDefault changes
    [event, on, off, preventDefault, trapped]
  );

  const preventDefaultHelper = (e, nextTrapped) => {
    if (trapped !== nextTrapped && preventDefault) {
      e.preventDefault();
    }
  };

  const handleEvent = e => {
    const trapped = ref.current.contains(e.target);
    preventDefaultHelper(e, trapped);
    setTrapped(trapped);
  };

  const handleFocusEvent = e => {
    const trapped = ref.current.contains(e.target);
    preventDefaultHelper(e, trapped);
    if (trapped) {
      setTrapped(true);
    }
  };

  const handleBlurEvent = e => {
    const trapped = ref.current.contains(e.target);
    preventDefaultHelper(e, trapped);
    if (!trapped) {
      setTrapped(false);
    }
  };

  return [trapped, setRef];
};

const { children, ...restOfPropTypes } = PropTypesDisplay.propTypes;

useTrap.propTypes = restOfPropTypes;
useTrap.defaultProps = PropTypesDisplay.defaultProps;

export default useTrap;
