import React, { useState } from "react";
import {
  SidebarWrapper,
  SidebarContent,
  ToggleSidebarContainer,
  ToggleSidebarButton,
} from "./styles";
import { SidebarNav } from "../";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarContent>
        <ToggleSidebarContainer>
          <ToggleSidebarButton
            iconProps={{ iconName: "GlobalNavButton" }}
            title="Minimize Sidebar"
            ariaLabel="Minimize Sidebar"
            onClick={() => setIsOpen((open) => !open)}
          />
        </ToggleSidebarContainer>
        <SidebarNav isSidebarOpen={isOpen} />
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;
