import { Container } from "components/atoms/Container";
import { SearchInput } from "components/atoms/SerchInput";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { HeaderProps } from "./types";

export function Header({}: HeaderProps): ReactElement {
  const router = useRouter();

  function handleSubmitSearch(search: string) {
    router.push(`/${search}`);
  }

  return (
    <Wrapper>
      <Container>
        <SearchInput onSubmit={handleSubmitSearch} />
      </Container>
    </Wrapper>
  );
}
