import React from "react";
import { Input } from "./styles";

export const TextInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <Input
      ref={ref}
      id="search"
      name="search"
      placeholder="Search..."
      type="search"
    />
  );
});
TextInput.displayName = "TextInput";
