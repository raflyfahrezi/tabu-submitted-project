//packages
import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

//components
import Loader from '../../loader/loader'
import ChatbotButton from './chatbotButton'
import DashboardContent from './dashboardContent'

//typography
import { Paragraph } from '../../typography'

//styles
const Dashboard = styled['div']``

const DashboardEndMessages = styled['div']`
    width: 100%;

    text-align: center;

    padding: 40px 0;
`

const dashboard = () => {
    const [populer, setPopuler] = useState([])
    const [pages, setPage] = useState({
        current: 1,
        max: 5,
    })
    const [isError, setIsError] = useState(false)
    const [endMessage, setEndMessage] = useState(
        'Kamu sudah ada di penghujung halaman ini 😊'
    )

    const fetchData = () => {
        if (navigator.onLine) {
            fetch(
                `https://tabu-api.herokuapp.com/popular?page=${pages.current}`
            )
                .then(res => res.json())
                .then(parsed => {
                    setPage({ ...pages, current: pages.current + 1 })
                    setPopuler(populer.concat(parsed.data))
                })
                .catch(err => {
                    setIsError(true)
                    setEndMessage(
                        'Wah sepertinya ada kesalahan pada server kami. Coba lagi nanti ya 😊'
                    )
                })
        } else {
            setIsError(true)
            setEndMessage('Wah sepertinya koneksi kamu bermasalah')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Dashboard id='InfiniteScrollTarget'>
            <AnimatePresence exitBeforeEnter>
                <Fragment>
                    {populer.length >= 1 ? (
                        <DashboardContent
                            populer={populer}
                            hasMore={
                                pages.current < pages.max && isError === false
                            }
                            fetchData={fetchData}
                            endMessage={endMessage}
                        />
                    ) : (
                        <Fragment>
                            {isError ? (
                                <DashboardEndMessages>
                                    <Paragraph color='#E91E63' bold>
                                        {endMessage}
                                    </Paragraph>
                                </DashboardEndMessages>
                            ) : (
                                <Loader />
                            )}
                        </Fragment>
                    )}
                </Fragment>
            </AnimatePresence>
            <ChatbotButton />
        </Dashboard>
    )
}

export default dashboard
