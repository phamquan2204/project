import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviesServices from '../Services/MoviesServices.js';
import List from '../Modules/List.js'

function KeyWord() {
  const { name, id, page } = useParams()
  const [keyword, setKeyword] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      MoviesServices.getMovieWithKeyword(id, page)
        .then(res => res.data)
        .then(data => setKeyword(data.results))
    }
    fetchData()
    window.scrollTo(0, 0)
  }, [name, id, page])

  return (
    <div>
      <List
        title={`keyword: ${name.replaceAll('+', ' ')}`}
        data={keyword}
        types={'movie'}
        page={page}
        link={`keyword/${name}/${id}`}
      />
    </div>
  )
}

export default KeyWord