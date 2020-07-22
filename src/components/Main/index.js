import React from "react";
import { Sidebar, TaskArea, TaskDetails } from "../";
import { MainAppWrapper } from "./styles";

const Main = () => {
  return (
    <MainAppWrapper>
      <Sidebar />
      <TaskArea />
      <TaskDetails />
    </MainAppWrapper>
  );
};

export default Main;
