import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesServices from '../Services/MoviesServices.js';
import List from '../Modules/List.js'

function Discover() {
    const { type, name, id, page } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await MoviesServices.getMovieWithGenres(type, id, page)
                .then(res => res.data)
                .then(data => setList(data.results))
        }
        window.scrollTo(0, 0)
        fetchData()
    }, [type, id, page]);

    return (
        <div>
            {console.log(list)}
            <List
                title={`${type}: ${name.replaceAll('+', ' ')}`}
                data={list}
                types={type}
                page={page}
                link={`${type}/genre/${name}/${id}`}
            />
        </div>
    )
}

export default Discover