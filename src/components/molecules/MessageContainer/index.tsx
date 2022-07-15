import { ReactElement } from "react";
import { Wrapper, Title, SubTitle } from "./styles";
import { MessageContainerProps } from "./types";

export function MessageContainer({
  title,
  subTitle,
}: MessageContainerProps): ReactElement {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
}
