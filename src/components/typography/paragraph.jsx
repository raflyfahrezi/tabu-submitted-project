import React from 'react'
import styled, { css } from 'styled-components'

const Paragraph = styled['div']`
    font-family: ${props => props['theme']['typography']['fontName']};
    font-size: ${props => props['theme']['typography']['fontSize']['1']};

    line-height: ${props => props['theme']['typography']['lineHeight']['1']};

    ${props =>
        props.color &&
        css`
            color: ${props => props.color};
        `}

    ${props =>
        props.bold &&
        css`
            font-weight: bold;
        `}
`

const paragraph = ({ children, color, bold }) => {
    return (
        <Paragraph color={color} bold={bold}>
            {children}
        </Paragraph>
    )
}

export default paragraph
