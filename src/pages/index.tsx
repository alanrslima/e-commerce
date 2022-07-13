import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HomePage from "templates/home/HomePage";

const Home: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/all");
  }, [push]);

  return <HomePage />;
};

export default Home;
