"use client";
import React, { useState } from "react";
import "./style.css";

function Input(props) {
  const [todo, setTodo] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setTodos((prevTodos) => [
          ...prevTodos,
          { id: Date.now(), text: todo },
        ]);
        setTodo("");
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn-add" type="submit">
        Add
      </button>
    </form>
  );
}

function EditInput(props) {
  const [todo, setTodo] = useState(props.todo.text);

  function handleCancle() {
    props.setIsEdit(false);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setTodos((prevTodos) =>
            prevTodos.map((item) => {
              if (item.id === props.todo.id) {
                return { ...item, text: todo };
              }
              return item;
            }),
          );
          setTodo("");
          props.setIsEdit(false);
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn-save" type="submit">
          Save
        </button>
      </form>
      <button className="btn-cansel" onClick={handleCancle}>
        Cancel
      </button>
    </>
  );
}

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={["sub-todo-item", props.todo.done && "done"]
        .filter(Boolean)
        .join(" ")}
    >
      {isEdit ? (
        <EditInput
          className="editing-input"
          setTodos={props.setTodos}
          todo={props.todo}
          setIsEdit={setIsEdit}
        />
      ) : (
        props.todo.text
      )}{" "}
      <button className="btn-edit" onClick={() => setIsEdit(true)}>
        Edit
      </button>
    </div>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
  ]);

  const done = todos.filter((todo) => todo.done).length;

  return (
    <div className="todo-app-project">
      <div className="todo-card">
        <Input setTodos={setTodos} />
        <p>
          Done{done}/{todos.length}
        </p>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                value={todo.done}
                onChange={(e) =>
                  setTodos((prevTodos) =>
                    prevTodos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, done: !item.done };
                      }
                      return item;
                    }),
                  )
                }
              />

              <TodoItem todo={todo} setTodos={setTodos} />
              <button
                className="btn-delete"
                onClick={() =>
                  setTodos((prevTodos) =>
                    prevTodos.filter((item) => item.id !== todo.id),
                  )
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
