import React from "react";
import styles from "./counter.module.css";

const Counter = ({ id, count, handleInc, handleDec }) => {
  return (
    <div className={styles.counter}>
      <button
        data-cy="task-counter-increment-button"
        onClick={() => handleDec(id,1)}
        disabled={count === 0}
      >
        <img alt="down arrow" src="https://img.icons8.com/fluency/2x/sort-down.png" />
      </button>
      <span data-cy="task-counter-value">{count}</span>
      <button
        data-cy="task-counter-decrement-button"
        onClick={() => handleInc(id,1)}
      >
        <img src="https://img.icons8.com/fluency/2x/sort-up.png" alt="up arrow" />
      </button>
    </div>
  );
};

export default Counter;
