//packages
import React from 'react'
import styled from 'styled-components'

//components
import BaseContainer from '../components/layout/container/container'
import Walkthrough from '../components/module/walkthrough/walkthrough'

const Container = styled['div']`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const index = () => {
    return (
        <BaseContainer>
            <Container>
                <Walkthrough />
            </Container>
        </BaseContainer>
    )
}

export default index
