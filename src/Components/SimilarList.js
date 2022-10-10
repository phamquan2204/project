import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import List from '../Modules/List.js'
import MoviesServices from '../Services/MoviesServices.js'


function SimilarList() {
    const [similar, setSimilar] = useState([])
    const { type, name, id, page } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            await MoviesServices.getMovieDetail(type, id,'similar', page)
                .then(res => res.data)
                .then(data => setSimilar(data.results))
        }
        fetchData()
        window.scrollTo(0, 0)
    }, [name, id, page]);
    return (
        <List
            title={`Similar: ${name.replaceAll('+', ' ')}`}
            data={similar}
            types={type}
            page={page}
            link={`similar/${type}/${name}/${id}`}
        >
            {console.log(similar, type)}
        </List>
    )
}

export default SimilarList