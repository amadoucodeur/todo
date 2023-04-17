import styled from "styled-components";
import "./App.css";
import { Provider } from "react-redux";
import Items from "./components/Items";
import Enter from "./components/Enter";
import { store } from "./redux";

export default function App() {
  return (
    // <Provider store={store}>
    <Div>
      <h1>Todo</h1>
      <Enter />
      <Items />
    </Div>
    // </Provider>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: purple;
  margin: 0;
  height: 100%;
  h1 {
    font-size: 3em;
    color: white;
  }
`;
