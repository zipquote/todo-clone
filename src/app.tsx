import React from "react";
import { Header, Main } from "components";
import GlobalStyles from "./globalStyles";

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
};
