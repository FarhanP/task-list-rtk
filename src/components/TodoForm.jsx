import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todolist/todoslice";

function TodoForm() {
  const [inputVal, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputValue(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputVal));
    console.log(inputVal);
    setInputValue("");
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-6">
      <input
        className="px-3 bg-white w-full min-h-12 focus:border-green-600 text-black sm:w-80 sm:min-h-10 rounded"
        type="text"
        maxLength="25"
        placeholder="Add your new Task..."
        value={inputVal}
        onChange={handleInput}
      />
      <button
        onClick={handleSubmit}
        className="border transition-colors duration-600 bg-green-600 hover:bg-green-700 border-green-600 px-4 py-1.5 sm:px-4 font-bold sm:text-lg text-lg rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;
