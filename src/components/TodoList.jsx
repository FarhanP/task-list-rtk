import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todolist/todoSlice";
import { useEffect } from "react";

function TodoList() {
  let todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(todos));
  }, [todos]);

  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-none w-full flex text-xl gap-6 flex-col text-black">
        {todos.map((todo) => (
          <li
            className="flex justify-between bg-stone-100 rounded gap-5"
            key={todo.id}
          >
            <span className="pl-3 py-2">{todo.task}</span>
            <button
              aria-label="delete-button"
              className="hover:bg-red-700 px-2 rounded-r transition-colors duration-600 text-white bg-red-500 font-bold border-red-700"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <h1 className="text-4xl text-center sm:text-3xl text-white">
          You have no <strong className="text-red-500">List</strong> added!
        </h1>
      )}
    </>
  );
}

export default TodoList;
