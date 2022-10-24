import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";


const Tasks = ({ todo, handleInc, handleDec, deleteTodo, handleCheck }) => {
  return (
    <>
      {todo.length !== 0 ? (
        <div data-cy="tasks" className={styles.tasks}>
          {todo?.map((el) => (
            <Task
              key={el.id}
              {...el}
              handleCheck={handleCheck}
              handleInc={handleInc}
              handleDec={handleDec}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      ) : (
        <div data-cy="tasks-empty" className={styles.empty}>
          <p>Add todo to your list</p>
          <img src="https://img.icons8.com/cotton/2x/empty-box.png" alt="" />
        </div>
      )}
    </>
  );
};

export default Tasks;
