import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newTodo = { id: Date.now(), text: task};
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    console.log("Deleting Todo with id :", id);
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    console.log("Updated todo List :", updatedTodos);
    setTodos(updatedTodos);
  };
 

  return (
    <>
      <div className="container text-bg-dark p-3">
        <h2>To-Do List In React</h2>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter a Task Here...."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="btn btn-primary my-3" onClick={addTodo}>
          Add Task
        </button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
