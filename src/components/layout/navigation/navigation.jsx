import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Navigation = styled['div']`
    width: 100%;

    padding: 10px 20px;

    background-color: ${props => props['theme']['color']['pink']};

    position: absolute;

    display: ${props => (props.isHome ? 'none' : 'block')};
`

const NavigationWrapper = styled['div']`
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;
`

const NavigationIcon = styled['img']`
    height: 20px;

    margin-right: 10px;
`

const navigation = () => {
    const Router = useRouter()

    return (
        <Navigation isHome={Router.route === '/'}>
            <NavigationWrapper>
                {Router.route !== '/dashboard' && (
                    <NavigationIcon
                        src='/assets/arrow-left.svg'
                        onClick={() => {
                            Router.push('dashboard')
                        }}
                    />
                )}
                <NavigationIcon src='/assets/Tabu.png' />
            </NavigationWrapper>
        </Navigation>
    )
}

export default navigation
