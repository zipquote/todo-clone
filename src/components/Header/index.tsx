import React from "react";
import { HeaderWrapper, Brand } from "./styles";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Brand>To Do</Brand>
    </HeaderWrapper>
  );
};

export default Header;
