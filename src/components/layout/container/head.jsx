import React from 'react'
import Head from 'next/head'

const head = ({ title }) => {
    return (
        <Head>
            {/* Primary */}
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='keywords' content='PWA' />
            <meta name='theme-color' content='#e91e63' />

            {/* PWA */}
            <link rel='manifest' href='/manifest.json' />
            <link
                href='/assets/logo.png'
                rel='icon'
                type='image/png'
                sizes='512x512'
            />
            <link rel='apple-touch-icon' href='/assets/logo.png'></link>

            {/* Basic */}
            <meta
                name='title'
                content={
                    title
                        ? `${title} - Tabu`
                        : 'Tabu - Kesehatanmu Masa Depanmu'
                }
            />
            <meta
                name='description'
                content='Tabu is an application that gives you valid and trustworthy information about woman sexual health.'
            />
            <title>
                {title ? `${title} - Tabu` : 'Tabu - Kesehatanmu Masa Depanmu'}
            </title>

            {/* Facebook */}
            <meta property='og:type' content='website' />
            <meta
                property='og:url'
                content='https://tabu.raflyfahrezi.space/'
            />
            <meta
                property='og:title'
                content={
                    title
                        ? `${title} - Tabu`
                        : 'Tabu - Kesehatanmu Masa Depanmu'
                }
            />
            <meta
                property='og:description'
                content='Tabu is an application that gives you valid and trustworthy information about woman sexual health.'
            />
            <meta property='og:image' content='/assets/logo.png' />

            {/* Twitter */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta
                property='twitter:url'
                content='https://tabu.raflyfahrezi.space/'
            />
            <meta
                property='twitter:title'
                content={
                    title
                        ? `${title} - Tabu`
                        : 'Tabu - Kesehatanmu Masa Depanmu'
                }
            />
            <meta
                property='twitter:description'
                content='Tabu is an application that gives you valid and trustworthy information about woman sexual health.'
            />
            <meta property='twitter:image' content='/assets/logo.png'></meta>
        </Head>
    )
}

export default head
