import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../Assets/Styles/Card.css';


function Card(props) {
  const [image, setImage] = useState()

  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    filter: `blur(15px) brightness(40%)`
  }

  const spliceString = (string, newString) => {
    string.length > 10 ? newString = string.slice(0, 14).concat('...') : newString = string
    return newString
  }

  return (
    <Link
      to={'/' + props.types + "/" + props.name.toLowerCase().replaceAll(' ', '+') + '/' + props.id}
      title={props.title || props.name}
      className="mb-2 mt-2 m-0 p-1 text-center text-capitalize text-light col-md-2 col-sm-4 col-6 align-items-baseline col row"
      onMouseEnter={() => {
        setImage(`${props.imgSrc}`)
      }}
      onMouseLeave={() => {
        setImage('')
      }}
    >
      <div
        className="image d-flex justify-content-center m-0 mb-2 p-0 h-100 col-12">
        <img
          className="overlay-image p-lg-2"
          src={props.imgSrc}
          alt={props.name}
        />
        <p className="star text-light bg-primary">
          <i className="fa-solid fa-star mr-1"></i>
          {props.vote_average}
        </p>
      </div>
      <div className="info-area col-12 h-100 row">
        <p className="name col-12 text-center text-light h-75 ">
          {spliceString(props.name)}
        </p>
      </div>
      <div
        className="overlay"
        style={style}
      ></div>
    </Link>
  )
}

export default Card;