import styled from "styled-components";

export const TaskDetailsWrapper = styled.aside`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  flex-direction: column;
  background-color: #ebebeb;
  padding: 10px;
  width: 360px;
  overflow: hidden;
  border-left: 1px solid gainsboro;
`;
