import React from "react";
import { useTrap } from "react-trap";
import Box from "./Box";

export default function App() {
  const [trapped, ref] = useTrap({ event: "click" });
  return <Box innerRef={ref} isFocused={trapped} />;
}
