//packages
import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

//components
import Link from '../../link/link'

//styles
const Container = styled['div']`
    width: 70px;
    height: 70px;

    display: grid;
    place-items: center;

    background-color: white;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    border-radius: 50%;

    position: fixed;

    bottom: 30px;
    right: 30px;

    cursor: pointer;
`

const Icon = styled['img']`
    height: 40px;
`

const chatbotButton = () => {
    return (
        <Link url='/chat'>
            <Container>
                <Icon src='/assets/chat.svg' />
            </Container>
        </Link>
    )
}

export default chatbotButton
