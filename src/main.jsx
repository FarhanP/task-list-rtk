import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <div className="flex">
      <footer className="py-5 absolute left-0 right-0 bottom-0 z-50 text-center">
        Made with <span className="text-green-600">&hearts;</span> by{" "}
        <b className="font-bold">Farhan</b>
      </footer>
    </div>
  </Provider>
);
