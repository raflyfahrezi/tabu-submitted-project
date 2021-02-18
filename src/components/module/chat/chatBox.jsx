//packages
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//components
import ChatArticle from './chatArticle'

//typography
import { Paragraph } from '../../typography/index'

//styles
const ChatBox = styled(motion['div'])`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;

    align-items: ${props => (props['isBot'] ? 'flex-start' : 'flex-end')};

    ${props => !props['isBot'] && 'padding-right : 10px;'}
`

const ChatBoxHeader = styled['div']`
    display: flex;
    gap: 10px;
    flex-direction: ${props => (props['isBot'] ? 'row' : 'row-reverse')};
`

const ChatBoxWrapper = styled['div']`
    width: max-content;
    max-width: 60%;

    padding: 5px 10px;

    margin-${props => (props['isBot'] ? 'left' : 'right')}: 35px;

    // background-color : #E91E63;

    // color : white;

    // border : none;
    border-color: ${props => props['theme']['color']['pink']};
    border-style: solid;
    border-radius: 5px;
`

const ChatBoxIcon = styled['img']`
    height: 25px;
`

const ChatBoxArticleWrapper = styled['div']`
    width: 100%;

    overflow-x: auto;

    padding: 10px 30px 10px 30px;

    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
`

const chatBox = ({ text, bot, article }) => {
    return (
        <ChatBox
            isBot={bot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <ChatBoxHeader isBot={bot}>
                <ChatBoxIcon
                    src={bot ? '/assets/tabu_icon.svg' : '/assets/girl.svg'}
                />
                <Paragraph>{bot ? 'Tabu' : 'Kamu'}</Paragraph>
            </ChatBoxHeader>
            <ChatBoxWrapper isBot={bot}>
                <Paragraph>{text}</Paragraph>
            </ChatBoxWrapper>
            {article && (
                <ChatBoxArticleWrapper>
                    {article.map((item, index) => {
                        return (
                            <ChatArticle
                                key={index}
                                text={item.title}
                                image={item.image}
                                link={item.link}
                            />
                        )
                    })}
                </ChatBoxArticleWrapper>
            )}
        </ChatBox>
    )
}

export default chatBox
