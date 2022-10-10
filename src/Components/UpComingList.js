import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesServices from '../Services/MoviesServices.js'
import List from '../Modules/List.js'

function UpComingList(props) {
    const [upComingList, setUpComingList] = useState([])
    const { page } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            MoviesServices.getUpcomingMovie(props.type, page)
                .then(res => res.data)
                .then(data => setUpComingList(data.results))
        }
        fetchData()

        window.scrollTo(0, 0)
        document.title = `Upcoming Movie Page ${page}`
    }, [page]);


    return (
        <>
            <List
                data={upComingList}
                page={page}
                title={"coming soon"}
                link={'upcoming'}
                types={'movie'}
            />
            {console.log(upComingList)}
        </>
    )
}

export default UpComingList