//packages
import React from 'react'
import styled from 'styled-components'

//component
import Link from '../../link/link'

//typography
import { Paragraph } from '../../typography/index'

//styles
const ChatArticle = styled['div']`
    width: 200px;
    height: 250px;

    border-radius: 3px;

    background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.9) 80%
        ),
        url('${props => props.src}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: grid;
    align-items: end;

    padding: 10px;
`

const chatArticle = ({ text, image, link }) => {
    return (
        <ChatArticle src={image}>
            <Link url={link}>
                <Paragraph color='#FFFFFF'>{text}</Paragraph>
            </Link>
        </ChatArticle>
    )
}

export default chatArticle
