import styled from "styled-components";

export const SidebarNavWrapper = styled.nav`
  overflow-x: hidden;
  overflow-y: auto;
`;

type SidebarNavListProps = {
  isOpen: boolean;
};

export const SidebarNavList = styled.ul<SidebarNavListProps>`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: ${({ isOpen }) => (isOpen ? 200 : 30)}px;
  overflow: hidden;
  margin: 8px 0 0 0;
  padding-left: 0;
`;
