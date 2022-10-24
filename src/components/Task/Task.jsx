import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ id, text, done, count, handleInc, handleDec, deleteTodo, handleCheck }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task" className={styles.task}>
      <div>
        <input
          type="checkbox"
          data-cy="task-checkbox"
          required
          onChange={(e) => handleCheck(e,id)}
          defaultChecked={done}
        />
        <div data-cy="task-text">{text}</div>
      </div>
      <div>
        <Counter
          id={id}
          count={count}
          handleDec={handleDec}
          handleInc={handleInc}
        />
        <button data-cy="task-remove-button" onClick={() => deleteTodo(id)}>
          <img
            src="https://img.icons8.com/fluency/2x/delete-forever.png"
            alt="deleteBtn"
          />
        </button>
      </div>
    </div>
  );
};

export default Task;
