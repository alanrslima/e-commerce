import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  margin: "0 auto",
  w: "100%",
  "@sm": {
    maxW: "640px",
  },
  "@md": {
    maxW: "768px",
  },
  "@lg": {
    maxW: "1024px",
  },
  "@xl": {
    maxW: "1280px",
  },
  "@xl2": {
    maxW: "1536px",
  },
});
