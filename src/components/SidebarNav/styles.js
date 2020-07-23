import styled from "styled-components";

export const SidebarNavWrapper = styled.nav`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SidebarNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: ${(props) => (props.isOpen ? 200 : 30)}px;
  overflow: hidden;
  margin: 8px 0 0 0;
  padding-left: 0;
`;
