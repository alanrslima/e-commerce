import { styled } from "styles/stitches.config";

export const Wrapper = styled("form", {
  margin: "0 auto",
  bg: "red",
  h: "400px",
  w: "100%",
  "@sm": {
    maxW: "640px",
  },
  boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
});
