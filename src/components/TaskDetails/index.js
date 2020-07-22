import React, { useState } from "react";
import { TaskDetailsWrapper } from "./styles";

const TaskDetails = (props) => {
  const [isHidden, setHidden] = useState(true);
  return (
    <TaskDetailsWrapper isHidden={isHidden}>
      <span>Task Details</span>
      <button onClick={() => setHidden((hidden) => !hidden)}>Tog</button>
    </TaskDetailsWrapper>
  );
};

export default TaskDetails;
