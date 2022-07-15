import { ReactElement } from "react";
import LoginForm from "../LoginForm";
import { Wrapper } from "./styles";

function LoginPage(): ReactElement {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}

export default LoginPage;
