//packages
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//typography
import { Paragraph } from '../../typography/index'

const ChatInfo = styled['div']`
    width: 100%;
    max-width: 400px;

    margin: 0 auto;
    padding: 10px;

    border: 1px solid ${props => props['theme']['color']['grey']};
    border-radius: 5px;

    color: ${props => props['theme']['color']['grey']};
`

const chatInfo = () => {
    return (
        <ChatInfo
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <Paragraph>
                Hai Selamat datang diruang tanya tabu!.
                <br />
                <br />
                Aku akan membantu kamu untuk mencarikan jawaban yang kamu butuh.
                Coba tanya aku seperti:
                <br />
                <br />
                1. Eh tau ga selaput dara itu sebenarnya menunjukan keperawanan
                ga sih?
                <br />
                2. Coba cari informasi penyebab keputihan
                <br />
                3. Kenapa selangkangan berwarna hitam
                <br />
                <br />
                Ayo tanya! &#128522;
            </Paragraph>
        </ChatInfo>
    )
}

export default chatInfo
