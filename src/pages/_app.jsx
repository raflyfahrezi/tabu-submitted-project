//packages
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'

//fonts
import '@fontsource/roboto'

//components
import Theme from '../theme/theme'
import Store from '../redux/store'

//styles
import GlobalStyles from '../styles/globals'

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <Provider store={Store}>
            <ThemeProvider theme={Theme}>
                <GlobalStyles />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
