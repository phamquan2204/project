import React, { useState, useEffect, useReducer } from 'react'
import QueryServices from '../Services/QueryServices.js';
import { IMG_BASE_URL, W500 } from '../Services/Variables.js';
import Card from './Card.js'
import img from '../Assets/Images/img.jpg';
function ResultList(props) {

  const [results, setResults] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    async function fetchData() {
      QueryServices.getQueryResult(props.query.toLowerCase().replaceAll(' ', '+'), props.page)
        .then(res => res.data)
        .then(data => {
          setResults(data.results)
          setPage(data.page)
        })
    }
    fetchData()
    document.title = `Results for: ${props.query}`
  }, [props.query, props.page]);

  let person = []
  let movie = []
  let tv = []

  results.map((result) => {
    switch (result.media_type) {
      case 'person':
        return person.push(result)
      case 'movie':
        return movie.push(result)
      case 'tv':
        return tv.push(result)
      default:
        return null;
    }
  })

  return (

    <div className="row align-items-center">
      {person.map((person) => {
        const { adult, gender, id, known_for, known_for_department, media_type, name, popularity, profile_path } = person
        return (
          <Card
            id={id}
            imgSrc={
              profile_path === null ? img : IMG_BASE_URL + W500 + profile_path
            }
            name={name}
            popularity={popularity}
            types={media_type}
          />
        )
      })}

      {
        movie.map((movie) => {
          const { adult, backdrop_path, genre_ids, id, media_type, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = movie
          return (
            <Card
              name={title}
              imgSrc={backdrop_path === null ? img : IMG_BASE_URL + W500 + poster_path}
              id={id}
              popularity={popularity}
              types={media_type}
              vote_average={vote_average}
            />
          )

        })
      }

      {
        tv.map((movie) => {
          const { backdrop_path, first_air_date, genre_ids, id, media_type, name, origin_country, original_language, original_name, overview, popularity, poster_path, vote_average, vote_count } = movie
          return (
            <Card
              name={name}
              imgSrc={poster_path === null ? img : IMG_BASE_URL + W500 + poster_path}
              id={id}
              popularity={popularity}
              types={media_type}
            />
          )

        })
      }


      {console.log(page)}
    </div>
  )
}

export default ResultList;