import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addTask } from '../redux'
import { useState } from 'react'
import { useRef } from 'react'

export default function Enter() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const input = useRef()
    const enter = (e) => {
        e.preventDefault()
        dispatch(addTask(input.current.value))
        input.current.value = ''
    }
  return (
    <Form onSubmit={enter}>
        <input type="text" ref={input} placeholder='Entrez la tache...' onChange={(e)=>{}}/>
    </Form>
  )
}

const Form = styled.form`
    input{
        padding: 5px;
        outline: none;
        border: none;
        border-radius: 4px;
        font-size: large;
        color: gray;
    }
`
