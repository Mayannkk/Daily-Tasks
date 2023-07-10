import React from "react";
import "./Style.css";
import { Todo } from "../model";
import SingleTask from "./SingleTask";

type todoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList: React.FC<todoListProps> = (props) => {
  return (
    <div className="Todos">
      {props.todos.map((todo) => (
        <SingleTask
          todo={todo}
          key={todo._id}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
