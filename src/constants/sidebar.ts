import { mergeStyles, mergeStyleSets } from "@fluentui/react/lib/Styling";

const iconClass = mergeStyles({
  fontSize: "1.6rem",
  width: "24px",
  height: "24px",
  margin: "0 4px 0 8px",
});
const classNames = mergeStyleSets({
  deepBlue: [{ color: "#3e69e4" }, iconClass],
  green: [{ color: "#5ca52d" }, iconClass],
  default: [{ color: "#767678" }, iconClass],
});

export const ACTIONS_LIST = [
  {
    id: "all-tasks",
    title: "Tasks",
    count: 0,
    icon: "Home",
    iconClassNames: classNames.deepBlue,
  },
];
