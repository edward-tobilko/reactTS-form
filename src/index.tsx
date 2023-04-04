import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "./appStyles";
import "./firebase"; // firebase

import App from "./App";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <ContextProvider>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </ContextProvider>
  </>,
);
