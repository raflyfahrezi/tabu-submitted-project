//packages
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

//components
import { Card } from '../../card/index'
import Loader from '../../loader/loader'

//typography
import { Paragraph } from '../../typography/index'

const DashboardContent = styled(motion['div'])``

const DashboardEndMessages = styled['div']`
    width: 100%;

    text-align: center;

    padding: 40px 0;
`

const dashboardContent = ({ populer, hasMore, fetchData, endMessage }) => {
    const InfiniteScrollStyle = {
        display: 'grid',
        gridGap: '20px',
    }

    return (
        <DashboardContent
            key={populer.length >= 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <InfiniteScroll
                dataLength={populer.length}
                next={fetchData}
                hasMore={hasMore}
                style={InfiniteScrollStyle}
                loader={<Loader />}
                endMessage={
                    <DashboardEndMessages>
                        <Paragraph color='#E91E63' bold>
                            {endMessage}
                        </Paragraph>
                    </DashboardEndMessages>
                }
                scrollableTarget='ContainerScrollableTarget'
            >
                {populer.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            image={item.image}
                            title={item.title}
                            url={item.link}
                            caption={item.snippet}
                        />
                    )
                })}
            </InfiniteScroll>
        </DashboardContent>
    )
}

export default dashboardContent
