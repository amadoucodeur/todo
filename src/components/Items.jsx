import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import styled from 'styled-components'

export default function Items() {
  const tasks = useSelector((state)=> state.todo)
  return (
    <Div>
      <h4>Rest à faire: {tasks.filter(el=>!el.done).length}</h4>
      {
       tasks.map((el)=><Item el={el}/>) 
      }
    </Div>
  )
}

const Div = styled.div`
  h4{
    color: wheat;
    text-align: start;
  }
  background-color: #5d055d;
  padding: 30px;
  margin: 5px;
  border-radius: 5px;
  margin: 5px;
  max-width: 700px;
  font-size: large;
  text-align: left;
`
