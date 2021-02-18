//packages
import React from 'react'
import styled from 'styled-components'

//components
import Header from '../components/typography/header'
import BaseContainer from '../components/layout/container/container'
import Dashboard from '../components/module/dashboard/dashboard'

//styles
const Container = styled['div']`
    width: 100%;

    padding-top: 70px;

    display: grid;
    grid-gap: 30px;
`

const dashboard = () => {
    return (
        <BaseContainer title='Dashboard'>
            <Container>
                <Header>Populer</Header>
                <Dashboard />
            </Container>
        </BaseContainer>
    )
}

export default dashboard
