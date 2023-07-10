import React, { useState } from "react";
import { Todo } from "../model";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import "./Style.css";

type SingleTaskProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTask: React.FC<SingleTaskProps> = (props) => {
  const handleDone = (_id: number) => {
    props.setTodos(
      props.todos.map((todo) =>
        todo._id === _id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (_id: number) => {
    props.setTodos(props.todos.filter((todo) => todo._id !== _id));
  };

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(props.todo.todo);

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    props.setTodos(
      props.todos.map((todo) =>
        todo._id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setIsEdit(false);
  };

  return (
    <form
      className="Single-Tasks"
      onSubmit={(e) => handleSubmit(e, props.todo._id)}
    >
      {isEdit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="Edit-Todo-Field"
        />
      ) : props.todo.isDone ? (
        <s className="Single-Task-Field">{props.todo.todo}</s>
      ) : (
        <span className="Single-Task-Field">{props.todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !props.todo.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDone(props.todo._id)}>
          <MdOutlineDone />
        </span>
        <span className="icon" onClick={() => handleDelete(props.todo._id)}>
          <AiOutlineDelete />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
