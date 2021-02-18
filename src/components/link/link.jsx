import React from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const A = styled['a']`
    color: inherit;

    text-decoration: none;

    cursor: pointer;
`

const link = ({ children, url }) => {
    const Router = useRouter()

    const LinkHandler = link => {
        if (link.includes('http')) {
            if (navigator.onLine) {
                Router.push(link)
            }
        } else {
            Router.push(link)
        }
    }

    return (
        <div onClick={() => LinkHandler(url)}>
            <A>{children}</A>
        </div>
    )
}

export default link
