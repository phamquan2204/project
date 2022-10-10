import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesServices from '../Services/MoviesServices.js';
import List from '../Modules/List.js'

function Recommend() {
    const { type, name, id, page } = useParams();
    const [recommend, setRecommend] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await MoviesServices.getMovieDetail(type, id, 'recommendations', page)
                .then(res => res.data)
                .then(data => setRecommend(data.results))
        }
        fetchData();
        window.scrollTo(0, 0)
    }, [type, name, id, page]);
    // recommend/:type/:name/:id&page=:page
    return (
        <div>
            <List
                title={`Recommend: ${name.replaceAll('+', ' ')}`}
                data={recommend}
                types={type}
                page={page}
                link={`recommend/${type}/${name}/${id}`}
            />
        </div>
    )
}

export default Recommend