import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
      <App/>
  </>
);
