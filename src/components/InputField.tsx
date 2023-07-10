import React from "react";
import "./Style.css";

type InputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};
const InputField: React.FC<InputProps> = (props) => {
  return (
    <form className="Input" onSubmit={props.handleAdd}>
      <input
        type="text"
        className="Input-Box"
        placeholder="Enter Tasks"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
      />
      <button type="submit" className="Submit-Button">
        Add
      </button>
    </form>
  );
};

export default InputField;
