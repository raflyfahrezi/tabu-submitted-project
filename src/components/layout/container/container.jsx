//packages
import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//components
import Navigation from '../navigation/navigation'
import Head from './head'

const Container = styled['div']`
    width: 100%;

    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    position: fixed;
`

const Wrapper = styled(motion['div'])`
    width: 100%;
    max-width: 1200px;

    height: 100%;

    margin: 0 auto;

    padding: 0 16px;
`

const container = ({ children, title }) => {
    const ContainerRef = useRef()

    return (
        <Container ref={ContainerRef} id='ContainerScrollableTarget'>
            <Head title={title} />
            <Navigation />
            <Wrapper
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
            >
                {children}
            </Wrapper>
        </Container>
    )
}

export default container
