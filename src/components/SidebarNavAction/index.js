import React from "react";
import classNames from "classnames";
import { FontIcon } from "@fluentui/react";
import {
  SidebarNavActionWrapper,
  SidebarNavActionTitle,
  SidebarNavActionCount,
} from "./styles";

const SidebarNavAction = ({ icon, title, count, iconClassNames }) => {
  return (
    <SidebarNavActionWrapper>
      <FontIcon iconName={icon} className={classNames(iconClassNames)} />
      <SidebarNavActionTitle>{title}</SidebarNavActionTitle>
      <SidebarNavActionCount>{count}</SidebarNavActionCount>
    </SidebarNavActionWrapper>
  );
};

export default SidebarNavAction;
