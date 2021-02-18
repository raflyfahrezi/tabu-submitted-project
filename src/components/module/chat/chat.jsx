//packages
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

//components
import ChatInfo from './chatInfo'
import ChatBox from './chatBox'
import Send from './send'

//redux
import Store from '../../../redux/store'
import { SET_MESSAGES_HISTORY } from '../../../redux/action'

//styles
const Chat = styled['div']`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ChatArea = styled['div']`
    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 20px 0;

    scroll-behavior: smooth;
`

const chat = ({ dispatch }) => {
    const MessageAreaRef = useRef()

    const [messageHistory, setMessageHistory] = useState(
        Store.getState().messagesHistory
    )

    const [query, setQuery] = useState('')

    const [triggerResponse, setTriggerResponse] = useState(0)

    const addingNewMessage = (text, isBot, type, article) => {
        let newMessage = []
        let temp = [...messageHistory]

        if (type === 0) {
            newMessage.push({
                type: type,
                text: text,
                bot: isBot,
            })
        } else {
            newMessage.push({
                type: type,
                text: text,
                bot: isBot,
                article: article,
            })
        }

        console.log(newMessage)

        temp = temp.concat(newMessage)

        setMessageHistory(temp)

        dispatch({
            type: SET_MESSAGES_HISTORY,
            messagesHistory: temp,
        })
    }

    const botResponse = () => {
        if (navigator.onLine) {
            fetch(`https://tabu-api.herokuapp.com/chatbot?q=${query}`)
                .then(res => res.json())
                .then(parsed =>
                    addingNewMessage(
                        parsed.fulfilmentText,
                        true,
                        1,
                        parsed.articles && parsed.articles
                    )
                )
        } else {
            addingNewMessage(
                'Tolong cek kembali koneksi internet anda ya 😊',
                true,
                0
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            MessageAreaRef['current']['scrollTop'] =
                MessageAreaRef['current']['scrollHeight']
        }, 100)
    }, [messageHistory])

    useEffect(() => {
        if (triggerResponse !== 0) {
            setTimeout(() => {
                botResponse()
            }, 1000)
        }
    }, [triggerResponse])

    return (
        <Chat>
            <ChatArea ref={MessageAreaRef}>
                <ChatInfo />
                {messageHistory.length >= 1 &&
                    messageHistory.map((item, index) => {
                        return (
                            <ChatBox
                                key={index}
                                bot={item['bot']}
                                text={item['text']}
                                article={
                                    item.type !== 0 &&
                                    item['article'].length >= 1 &&
                                    item['article']
                                }
                            />
                        )
                    })}
            </ChatArea>
            <Send
                sendText={text => {
                    addingNewMessage(text, false, 0)
                    setQuery(text)
                    setTriggerResponse(prev => prev + 1)
                }}
            />
        </Chat>
    )
}

const MapDispatchToProps = dispatch => {
    return {
        dispatch: data => dispatch(data),
    }
}

export default connect(null, MapDispatchToProps)(chat)
