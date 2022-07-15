import { styled } from "styles/stitches.config";

export const Wrapper = styled("header", {
  // display: "flex",
  w: "100%",
  h: "600px",
  p: "20%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Title = styled("h2", {
  fontSize: "$6",
  fontWeight: "$medium",
  textAlign: "center",
  color: "$gray800",
});

export const SubTitle = styled("p", {
  fontSize: "$3",
  fontWeight: "$medium",
  textAlign: "center",
  color: "$gray600",
  mt: "$6",
});
