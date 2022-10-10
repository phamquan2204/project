import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import List from '../Modules/List.js'
import TrendingServices from '../Services/TrendingServices.js'

function TrendingList(props) {
    const [trendingList, setTrendingList] = useState([])
    const [time, setTime] = useState('day')
    const { type, page } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            document.title = `Trending ${type.toUpperCase()}`
            TrendingServices.getTrending(type, time, page)
                .then(res => res.data)
                .then(data => setTrendingList(data.results))
        }
        fetchData()
        window.scrollTo(0, 0)
    }, [page, time]);

    return (
        <>
            <List
                title={`Trending ${type}`}
                data={trendingList}
                types={type}
                page={page}
                link={`trending/${type}`}
            >
            </List>
            {console.log(trendingList)}
        </>
    )
}


export default TrendingList