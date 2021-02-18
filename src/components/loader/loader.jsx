//packages
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//components
import Image from '../images/images'

const Loader = styled(motion['div'])`
    width: 100%;

    display: grid;
    place-items: center;
`

const loader = () => {
    return (
        <Loader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Image src={'/assets/loader-2.svg'} w={100} h={100} />
        </Loader>
    )
}

export default loader
