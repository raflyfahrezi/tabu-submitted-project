//packages
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//styles
const MoreButton = styled(motion['button'])`
    min-width: 100px;

    padding: 10px 12px;

    background-color: ${props => props.theme.color.pink};

    font-family: ${props => props['theme']['typography']['fontName']};
    font-size: ${props => props['theme']['typography']['fontSize']['1']};

    color: white;

    border: none;
    border-radius: 8px;

    cursor: pointer;

    outline: none;
`

const moreButton = () => {
    return (
        <MoreButton whileTap={{ scale: 0.95 }}>
            Muat lebih banyak artikel
        </MoreButton>
    )
}

export default moreButton
