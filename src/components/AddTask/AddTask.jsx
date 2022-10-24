import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({ task, setTask, addTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        required
        className="todoTask"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Add Todo Task"
      />
      <button data-cy="add-task-button" onClick={() => addTask()}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
