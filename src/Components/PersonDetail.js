import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { IMG_BASE_URL, W500, ORIGINAL } from '../Services/Variables.js'
import PersonServices from '../Services/PersonServices.js'

import '../Assets/Styles/PersonDetail.css'

function PersonDetail() {
  const { name, id } = useParams()
  const [detail, setDetail] = useState([])
  const [credits, setCredits] = useState([])
  const [tvCredits, setTvCredits] = useState([])
  const [type, setType] = useState('movie_credits')
  useEffect(() => {
    const fetchData = async () => {
      await PersonServices.getPersonDetail(id)
        .then(res => res.data)
        .then(data => setDetail(data))
      await PersonServices.getPersonCredit(type, id)
        .then(res => res.data)
        .then(data => setCredits(data))
    }
    fetchData()
    window.scrollTo(0, 0)
  }, [id, type])

  const { cast, crew, credits_id } = credits


  return (
    <>
    <p className="h2 text-light text-center pt-3">{detail.gender ==2 ? 'Actor' : 'Actress'}: {detail.name}</p>
      <div className="detail-container w-90 p-lg-5 d-flex flex-column flex-sm-row text-light text-justify">
        <div className="detail-image">
          <div className="person-img">
            <img src={IMG_BASE_URL + ORIGINAL + detail.profile_path} alt={detail.name} />
          </div>
          <div className="data">
            <p className="detail-name">
              Name:
              <span>{detail.name}</span>
            </p>
            <p className="date-of-birth">Birthday: {detail.birthday}</p>
            <p className="place-of-birth">Place of birth: {detail.place_of_birth}</p>
          </div>
        </div>
        <div className="detail-data">
          <div className="biography">
            <p className="h4">Biography</p>
            <p>
              {detail.biography}
            </p>
          </div>
        </div>
      </div>
      <div className="table-data text-light text-center pr-lg-5 pl-lg-5">
        <button className="btn btn-group btn-dark m-1 mr-2 type"
          value="movie_credits"
          onClick={(e) => setType('movie_credits')}>Movie</button>
        <button className="btn btn-group btn-dark m-1 mr-2 type"
          value="tv_credits" onClick={(e) => setType('tv_credits')}>TV</button>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th className="first-th"></th>
              <th scope="col">Release</th>
              <th scope="col">Title</th>
              <th scope="col">Character</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center h3" colspan='3'>Cast</tr>
            {cast?.map((credit) => {
              return (
                <tr key={credit.id}>
                  <td className="first-th"></td>
                  <td>{credit.first_air_date || credit.release_date}</td>
                  <td>{credit.name || credit.title}</td>
                  <td>{credit.character}</td>
                </tr>
              )
            })}
            <tr className="text-center h3" colspan='3'>Crew</tr>
            {crew?.map((credit) => {
              return (
                <tr key={credit.id}>
                  <td className="first-th"></td>
                  <td>{credit.first_air_date || credit.release_date}</td>
                  <td>{credit.name || credit.title}</td>
                  <td>{credit.character}</td>
                </tr>
              )
            })}
          </tbody>
          {console.log(type)}
        </table>
      </div>
    </>
  )
}

export default PersonDetail