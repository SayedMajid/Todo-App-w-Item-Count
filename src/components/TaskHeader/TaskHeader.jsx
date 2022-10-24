import React from "react";
import styles from "./taskHeader.module.css";


const TaskHeader = ({todo}) => {
  const notCompleted = todo.filter((el) => el.done === false);
  let totalTask = todo.length;
  let unCompletedTask = notCompleted.length;

  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <div>
        <p className={styles.taskHeader}>Todo App with counter</p>
      </div>
      <div className={styles.taskStatus} >
        {`Tasks ${unCompletedTask} remaining of total ${totalTask} tasks`}
      </div>
    </div>
  );
};

export default TaskHeader;
