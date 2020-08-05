import React from "react";
import classNames from "classnames";
import { FontIcon } from "@fluentui/react";
import {
  SidebarNavActionWrapper,
  SidebarNavActionTitle,
  SidebarNavActionCount,
} from "./styles";

export interface SidebarNavActionProps {
  icon: string;
  title: string;
  count: number;
  iconClassNames: any;
}

const SidebarNavAction: React.FC<SidebarNavActionProps> = ({
  icon,
  title,
  count,
  iconClassNames,
}) => {
  return (
    <SidebarNavActionWrapper>
      <FontIcon iconName={icon} className={classNames(iconClassNames)} />
      <SidebarNavActionTitle>{title}</SidebarNavActionTitle>
      <SidebarNavActionCount>{count}</SidebarNavActionCount>
    </SidebarNavActionWrapper>
  );
};

export default SidebarNavAction;
