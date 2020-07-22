import React, { useState } from "react";
import { SidebarWrapper, SidebarContent, ToggleSidebarButton } from "./styles";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarContent>
        <ToggleSidebarButton
          iconProps={{ iconName: "GlobalNavButton" }}
          title="Minimize Sidebar"
          ariaLabel="Minimize Sidebar"
          onClick={() => setIsOpen((open) => !open)}
        />
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;
