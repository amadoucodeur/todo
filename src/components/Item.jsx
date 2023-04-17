import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delTask, doTask } from "../redux";

export default function Item({ el }) {
  const dispatch = useDispatch();
  return (
    <Div>
      <span>{el.id}</span>
      <input
        type="checkbox"
        checked={el.done}
        onChange={() => {dispatch(doTask(el.id)); console.log(el.done)}}
      />
      <span>{el.text}</span>
      <button
        onClick={() => {
          dispatch(delTask(el.id));
        }}
      >
        X
      </button>
    </Div>
  );
}

const Div = styled.div`
  input {
    font-size: large;
    border: none;
    border-radius: 2px;
    background-color: transparent;
    outline: none;
  }
  .modifier {
    background-color: white;
    outline: none;
  }
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
  background-color: #7e82a8;
  padding: 5px;
  font-size: large;
  color: white;
`;
