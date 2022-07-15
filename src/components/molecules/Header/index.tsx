import { Container } from "components/atoms/Container";
import { SearchInput } from "components/atoms/SerchInput";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { HeaderProps } from "./types";

export function Header({}: HeaderProps): ReactElement {
  const router = useRouter();

  function handleSubmitSearch(search: string) {
    router.push({ pathname: "/", query: { search } });
  }

  function handleCart() {
    router.push({ pathname: "/cart" });
  }

  function handleHome() {
    router.push({ pathname: "/" });
  }

  return (
    <Wrapper>
      <Container>
        <button onClick={handleHome}>Logo</button>
        <SearchInput onSubmit={handleSubmitSearch} />
        <button onClick={handleCart}>Carrinho</button>
      </Container>
    </Wrapper>
  );
}
