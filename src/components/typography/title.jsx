import React from 'react'
import styled from 'styled-components'

const Title = styled['p']`
    font-family : ${ props => props['theme']['typography']['fontName'] };
    font-size : ${ props => props['theme']['typography']['fontSize']['2'] };

    line-height : ${ props => props['theme']['typography']['lineHeight']['2'] };
`

const title = ({ children }) => {
    return <Title>{ children }</Title>
}

export default title
