import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  w: "100%",
  background: "$surface",
  display: "flex",
  flexDirection: "row",
  p: "$6",
  borderBottomWidth: "thin",
  borderBottomColor: "$gray100",
  borderBottomStyle: "solid",
});

export const Image = styled("img", {
  h: "120px",
  width: "120px",
  objectFit: "contain",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("h2", {
  fontSize: "$4",
  fontWeight: "$medium",
});

export const Subtitle = styled("p", {
  fontSize: "$1",
  color: "$gray600",
});

export const Value = styled("span", {
  fontSize: "$1",
});

export const SaleValue = styled("span", {
  fontSize: "$4",
  fontWeight: "$semiBold",
});
