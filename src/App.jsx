import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full flex-grow max-w-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="font-bold text-center text-4xl my-10">
        U.R <strong className="text-green-600">Task</strong> List
      </h1>
      <div className="flex justify-center gap-12 items-center flex-col">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
