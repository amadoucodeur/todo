import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

const Br = styled(BrowserRouter)`
  background-color: black;
`;
