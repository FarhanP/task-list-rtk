import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <footer className="py-5 text-center">
      Made with <span className="text-green-600">&hearts;</span> by{" "}
      <b className="font-bold">Farhan</b>
    </footer>
  </Provider>
);
