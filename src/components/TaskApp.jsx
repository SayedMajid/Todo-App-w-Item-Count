import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json";
import { useEffect } from "react";

const TaskApp = () => {
  const [todo, setTodo] = useState(data);
  const [task, setTask] = useState("");

  const addTask = () => {
    let dupe = todo.find(
      (el) => el.text.toLocaleLowerCase() === task.toLocaleLowerCase()
    );

    if (dupe?.text.toLocaleLowerCase() === task.toLocaleLowerCase()) {
      setTask("");
      const d1 = document.querySelector(".todoTask");

      setTimeout(() => {
        d1.style.border = "2px solid red";
        d1.setAttribute("placeholder", "Duplicate Todo Found");
      });

      setTimeout(() => {
        d1.style.border = "1px solid gray";
        d1.setAttribute("placeholder", "Add Todo Task");
      }, 5000);

      return;
    }

    const payload = {
      id: new Date().toISOString(),
      text: task,
      done: false,
      count: 1,
    };
    setTodo([...todo, payload]);
    setTask("");
  };

  const handleInc = (id, value) => {
    const updated = todo?.map((todo) =>
      todo.id === id ? { ...todo, count: todo.count + value } : todo
    );

    setTodo(updated);
  };

  const handleDec = (id, value) => {
    const updated = todo.map((todo) =>
      todo.id === id ? { ...todo, count: todo.count - value } : todo
    );

    setTodo(updated);
  };

  const deleteTodo = (id) => {
    const deleted = todo.filter((todo) => todo.id !== id);
    setTodo(deleted);
  };

  const handleCheck = (e, id) => {
    const query = e.target.checked;

    const changes = todo.map((el) =>
      el.id === id ? { ...el, done: query } : el
    );
    setTodo(changes);
  };

  console.log(todo, "parent app");

  useEffect(() => {}, [todo]);

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <div>
        <TaskHeader todo={todo} />
      </div>
      <AddTask task={task} setTask={setTask} addTask={addTask} />
      <Tasks
        handleInc={handleInc}
        handleDec={handleDec}
        deleteTodo={deleteTodo}
        handleCheck={handleCheck}
        todo={todo}
      />
    </div>
  );
};

export default TaskApp;
