import styled from "styled-components";

export const SidebarNavActionWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 3.5rem;
  cursor: pointer;
  max-width: 200px;
  padding: 0 10px 0 10px;

  &:hover {
    background-color: #fafafa;
  }
`;

export const SidebarNavActionTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 8px 0 0;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarNavActionCount = styled.span`
  font-size: 1.5rem;
  margin-left: auto;
`;
