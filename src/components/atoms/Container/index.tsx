import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { ContainerProps } from "./types";

export function Container({ children }: ContainerProps): ReactElement {
  return <Wrapper>{children}</Wrapper>;
}
