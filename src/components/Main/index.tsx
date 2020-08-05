import React from "react";
import { Sidebar, TaskArea, TaskDetails } from "../";
import { MainAppWrapper } from "./styles";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <MainAppWrapper>
      <Sidebar />
      <TaskArea />
      <TaskDetails />
    </MainAppWrapper>
  );
};

export default Main;
