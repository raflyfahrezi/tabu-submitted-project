//packages
import React from 'react'
import styled from 'styled-components'

//components
import BaseContainer from '../components/layout/container/container'
import Chat from '../components/module/chat/chat'

//styles
const Container = styled['div']`
    width: 100%;
    height: 100%;

    padding-top: 45.5px;
`

const chat = () => {
    return (
        <BaseContainer title='Tanya Tabu'>
            <Container>
                <Chat />
            </Container>
        </BaseContainer>
    )
}

export default chat
