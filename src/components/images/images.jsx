//packages
import React from 'react'
import Image from 'next/image'

const images = ({ src, w, h, layout }) => {
    return <Image src={src} width={w} height={h} layout={layout} />
}

export default images
