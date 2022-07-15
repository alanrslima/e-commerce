import { ReactElement, useRef } from "react";
import { Wrapper } from "./styles";
import { signIn } from "next-auth/react";

function LoginForm(): ReactElement {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.log("Iniciando login");

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("Iniciando login", email, password);

    const { error } = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(error);

    // const target = evt.target as HTMLFormElement;
    // target.reset();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />
      <input ref={passwordRef} type="password" />
      <input type="submit" />
    </Wrapper>
  );
}

export default LoginForm;
