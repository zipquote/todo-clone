import React from "react";
import { ACTIONS_LIST } from "../../constants";
import { SidebarNavWrapper, SidebarNavList } from "./styles";
import { SidebarNavAction } from "..";

export interface SidebarNavProps {
  isSidebarOpen: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ isSidebarOpen }) => {
  return (
    <SidebarNavWrapper>
      <SidebarNavList isOpen={isSidebarOpen}>
        {ACTIONS_LIST.map(({ id, ...restProps }) => (
          <SidebarNavAction key={id} {...restProps} />
        ))}
      </SidebarNavList>
    </SidebarNavWrapper>
  );
};

export default SidebarNav;
