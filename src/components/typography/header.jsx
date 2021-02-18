import React from 'react'
import styled from 'styled-components'

const Header = styled['h1']`
    font-family : ${ props => props['theme']['typography']['fontName'] };
    font-size : ${ props => props['theme']['typography']['fontSize']['3'] };

    color : ${ props => props['theme']['color']['pink'] };

    line-height : ${ props => props['theme']['typography']['lineHeight']['3'] };
`

const header = ({ children }) => {
    return <Header>{ children }</Header>
}

export default header
