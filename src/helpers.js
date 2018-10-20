export const asArray = input => {
  let output;
  if (!Array.isArray(input)) {
    output = [input];
  } else {
    output = input;
  }

  return output;
};
