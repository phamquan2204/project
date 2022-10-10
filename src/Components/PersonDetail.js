import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { IMG_BASE_URL, W500, ORIGINAL } from '../Services/Variables.js'
import PersonServices from '../Services/PersonServices.js'

import '../Assets/Styles/PersonDetail.css'

function PersonDetail() {
  const { name, id } = useParams()
  const [detail, setDetail] = useState([])
  const [credits, setCredits] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await PersonServices.getPersonDetail(id)
        .then(res => res.data)
        .then(data => setDetail(data))
      await PersonServices.getPersonCredit('movie_credits', id)
        .then(res => console.log(res.data))
        .then(data => setCredits(data))
    }
    fetchData()
    window.scrollTo(0, 0)
  }, [id])

  const asKnownAs = (datas) => {
    datas.map(data => <li key={data}>{data}</li>)
  }

  return (
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
  )
}

export default PersonDetail