import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL, W500, ORIGINAL } from '../Services/Variables.js'
import img from '../Assets/Images/img.jpg'
import '../Assets/Styles/InforCard.css'

export function InforCard(props) {


    return (
        <Link
            className="row infor-card-container"
            to={props.name
                ? `/${props.media_type}/${props.name.toLowerCase().replaceAll(' ', '+')}/${props.id}`
                : `/${props.media_type}/${props.title.toLowerCase().replaceAll(' ', '+')}/${props.id}`}
        >
            <img
                className="infor-card col-12 p-3"
                src={props.profile_path === undefined ? IMG_BASE_URL + ORIGINAL + props.poster_path : IMG_BASE_URL + ORIGINAL + props.profile_path || img || IMG_BASE_URL + ORIGINAL + props.profile_path}
                alt={props.title || props.name}
                style={{ borderRadius: '2em' }}
            />
            <p className="star-infor text-light bg-primary">
                <i className="fa-solid fa-star mr-1"></i>
                <p className="m-0">{props.vote_average || props.popularity}</p>
            </p>
            {props.media_type === 'person'
                ? <p className="name text-light text-center">{props.title || props.name}</p>
                : null
            }

        </Link>
    )
}

export function BannerCard(props) {
    return (
        <Link to={props.name
            ? `/${props.media_type}/${props.name.toLowerCase().replaceAll(' ', '+')}/${props.id}`
            : `/${props.media_type}/${props.title.toLowerCase().replaceAll(' ', '+')}/${props.id}`}
            style={{
                height: '100%',
            }}
        >

            <img
                className="col-12 m-0 p-0 rounded banner-img"
                src={IMG_BASE_URL + ORIGINAL + props.backdrop_path || img}
                style={{
                    height: '100%',
                }}
                alt={props.title || props.name}
            />
            <p className="star-infor-banner text-light bg-primary ">
                <i className="fa-solid fa-star m-0 mr-1 h4"></i>
                <p className="m-0 h4">{props.vote_average || props.popularity}</p>
            </p>
            <div className="banner-data">
                <div className="banner-description">
                    <p className="banner-name h1 ">{props.title || props.name}</p>
                    <p className="banner-first_air_date text-light">First air date: {props.airDate}</p>
                    <div className="overview text-light">
                        <p className="h3">Overview</p>
                        <p className="overview-text">{props.overview}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

