import React, { ReactElement, useRef } from "react";
import { Wrapper, Input } from "./styles";
import { SerchInputProps } from "./types";

export function SearchInput({ onSubmit }: SerchInputProps): ReactElement {
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    onSubmit(searchRef.current?.value || "");
    const target = evt.target as HTMLFormElement;
    target.reset();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        ref={searchRef}
        id="search"
        name="search"
        placeholder="Search..."
        type="search"
      />
    </Wrapper>
  );
}
