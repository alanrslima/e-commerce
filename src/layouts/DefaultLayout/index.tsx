// import { Head } r } from 'components/Sidebar';
// import { Sidebar } from "components/organisms/Sidebar";
import { ReactElement } from "react";
// import { Content, InnerContent } from "./styles";
import { DefaultLayoutProps } from "./types";
import { Container } from "components/atoms/Container";
import { Wrapper } from "./styles";

export function DefaultLayout({
  children,
  title,
}: DefaultLayoutProps): ReactElement {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );

  // return (
  //   <>
  //     {/* <Head title={title} /> */}
  //     <Container>
  //       <Sidebar />
  //       <Content as="main">
  //         <InnerContent as="section">{children}</InnerContent>
  //       </Content>
  //     </Container>
  //   </>
  // );
}
