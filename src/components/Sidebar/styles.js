import styled from "styled-components";
import { IconButton } from "@fluentui/react";

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-right: 1px solid gainsboro;
  width: ${(props) => (props.isOpen ? 200 : 50)}px;
  transition: all 200ms ease-in;
`;

export const SidebarContent = styled.div`
  margin: 10px 0 10px 0;
`;

export const ToggleSidebarContainer = styled.div`
  padding: 0 10px 0 10px;
`;

export const ToggleSidebarButton = styled(IconButton)`
  padding: 4px;

  &:hover {
    border: 1px solid gainsboro;
    background-color: #fafafa;
  }
`;
