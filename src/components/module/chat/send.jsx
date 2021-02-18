//packages
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//styles
const Send = styled['div']`
    width: 100%;

    display: flex;
    gap: 20px;

    padding: 10px 0;
`

const SendInput = styled['input']`
    width: 100%;

    padding: 10px;

    outline: none;

    border-color: #e91e63;
    border-style: solid;
    border-radius: 5px;

    font-family: ${props => props['theme']['typography']['fontName']};
    font-size: ${props => props['theme']['typography']['fontSize']['1']};
`

const SendIconWrapper = styled(motion['div'])`
    display: flex;
    align-items: center;

    cursor: pointer;
`

const SendIcon = styled['img']``

const SendForm = styled['form']`
    width: 100%;
`

const send = ({ sendText }) => {
    const InputField = useRef()

    const [message, setMessage] = useState('')

    const FormHandler = e => {
        e.preventDefault()

        let messageTemp = message.trim()

        if (messageTemp !== '') {
            sendText(message)
            InputField.current.value = ''
            setMessage('')
        }
    }

    const InputHandler = e => {
        const Element = e.target

        setMessage(Element['value'])
    }

    return (
        <Send>
            <SendForm onSubmit={FormHandler}>
                <SendInput
                    placeholder='Ayo tanyakan sesuatu !'
                    autoCorrect='off'
                    spellCheck='false'
                    onChange={InputHandler}
                    ref={InputField}
                />
            </SendForm>
            <SendIconWrapper onClick={FormHandler} whileTap={{ scale: 0.95 }}>
                <SendIcon src='/assets/send.svg' />
            </SendIconWrapper>
        </Send>
    )
}

export default send
