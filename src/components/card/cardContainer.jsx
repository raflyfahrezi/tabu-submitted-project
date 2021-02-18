import React from 'react'
import styled from 'styled-components'

const CardContainer = styled['div']`
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`

const cardContainer = ({ children }) => {
    return <CardContainer>{children}</CardContainer>
}

export default cardContainer
