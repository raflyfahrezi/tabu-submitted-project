//packages
import React from 'react'
import styled from 'styled-components'

//components
import Link from '../link/link'

//typography
import { Paragraph } from '../typography/index'

//styles
const Card = styled['div']`
    width: 100%;

    display: flex;
    align-items: center;

    padding: 10px;

    border: 1px solid #e4e4e4;
    border-radius: 8px;

    box-shadow: 0px 16px 16px rgba(50, 50, 71, 0.08),
        0px 24px 32px rgba(50, 50, 71, 0.08);

    background-color: white;
`

const CardImages = styled['div']`
    width: 130px;
    height: 100px;

    background-image: url('${props => props.src}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 8px;
`

const CardDescription = styled['div']`
    width: 100%;

    margin-left: 20px;

    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-gap: 5px;
`

const CardSnippet = styled['div']`
    font-family: ${props => props['theme']['typography']['fontName']};
    font-size: ${props => props['theme']['typography']['fontSize']['1']};

    line-height: ${props => props['theme']['typography']['lineHeight']['1']};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const card = ({ domain, title, caption, url, image }) => {
    return (
        <Card>
            <CardImages src={image} />
            <CardDescription>
                {/* <Paragraph color='#777777'>{domain}</Paragraph> */}
                <Link url={url}>
                    <Paragraph bold>{title}</Paragraph>
                </Link>
                {/* <Paragraph>{caption}</Paragraph> */}
                <CardSnippet>{caption}</CardSnippet>
            </CardDescription>
        </Card>
    )
}

export default card
