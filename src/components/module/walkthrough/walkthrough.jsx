//packages
import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

//typography
import { Header } from '../../typography/index'

const Walkthrough = styled['div']`
    height: 100%;
    max-height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WalkthroughWrapper = styled['div']`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || 'center'};
`

const WalkthroughIcon = styled['img']`
    height: 100px;
`

const WalkthroughButton = styled['div']`
    color: white;

    background-color: #e91e63;

    padding: 10px 20px;

    border: none;
    border-radius: 50px;

    cursor: pointer;

    outline: none;

    font-weight: bold;
    font-family: ${props => props['theme']['typography']['fontName']};
    font-size: ${props => props['theme']['typography']['fontSize']['1']};
`

const walkthrough = () => {
    const Router = useRouter()

    const initialOpen = 'INITIALOPEN'

    const [isReady, setIsReady] = useState(false)

    const mulaiHandler = link => {
        localStorage.setItem(initialOpen, 'false')
        Router.replace(link)
    }

    useEffect(() => {
        if (localStorage.getItem(initialOpen)) {
            Router.push('/dashboard')
        } else {
            setIsReady(true)
        }
    }, [])

    return (
        <Fragment>
            {isReady && (
                <Walkthrough>
                    <WalkthroughWrapper>
                        <div>
                            <WalkthroughIcon src='/assets/logo.png' alt='' />
                        </div>
                        <div>
                            <WalkthroughIcon src='/assets/logo_2.png' alt='' />
                        </div>
                    </WalkthroughWrapper>
                    <WalkthroughWrapper>
                        <Header>
                            Dapatkan informasi kesehatan seksual wanita disini,
                            kita jaga rahasiamu.
                        </Header>
                    </WalkthroughWrapper>
                    <WalkthroughWrapper align='flex-end'>
                        <WalkthroughButton
                            onClick={() => mulaiHandler('/dashboard')}
                        >
                            Mulai
                        </WalkthroughButton>
                    </WalkthroughWrapper>
                </Walkthrough>
            )}
        </Fragment>
    )
}

export default walkthrough
