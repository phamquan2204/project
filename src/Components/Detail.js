import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { IMG_BASE_URL, W500, ORIGINAL } from '../Services/Variables.js'
import MoviesServices from '../Services/MoviesServices.js'

import '../Assets/Styles/Detail.css'
import { SwiperEffectFade } from '../Modules/SwiperList.js'

function Detail() {
    const { type, name, id } = useParams()

    const [details, setDetails] = useState([])
    const [keywords, setKeywords] = useState([])
    const [similar, setSimilar] = useState([])
    const [recommend, setRecommend] = useState([])
    const [images, setImages] = useState({
        backdrop_path: [],
        logos: [],
        posters: []
    })
    const [videos, setVideos] = useState([])
    const [casts, setCasts] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            await MoviesServices.getMovies(type, id)
                .then(res => res.data)
                .then(data => setDetails(data))
            await MoviesServices.getMovieDetail(type, id, 'keywords', 1)
                .then(res => res.data)
                .then(data => {
                    type === 'movie'
                        ? setKeywords(data.keywords)
                        : setKeywords(data.results)
                })
            await MoviesServices.getMovieDetail(type, id, 'similar', 1)
                .then(res => res.data)
                .then(data => setSimilar(data.results))
            await MoviesServices.getMovieDetail(type, id, 'recommendations', 1)
                .then(res => res.data)
                .then(data => setRecommend(data.results))
            await MoviesServices.getMovieDetail(type, id, 'images', 1)
                .then(res => res.data)
                .then(data => setImages({
                    backdrops: data.backdrops,
                    logos: data.logos,
                    posters: data.posters
                }))
            await MoviesServices.getMovieDetail(type, id, 'videos', 1)
                .then(res => res.data)
                .then(data => setVideos(data.results))
            await MoviesServices.getMovieDetail(type, id, 'credits', 1)
                .then(res => res.data)
                .then(data => setCasts(data.cast))

            window.scrollTo(0, 0)
        }

        if (details.title === undefined) {
            document.title = details.name
        } else {
            document.title = details.title
        }
        // window.document.title = details.title || details.name
        fetchData();
    }, [id, name, type]);

    const movieGenres = () => {
        return details.genres?.map((genre) => {
            return (
                <Link to={`/${type}/genre/${genre.name.toLowerCase().replaceAll(' ', '+')}/${genre.id}&page=1`}>
                    <button className="genre btn btn-group btn-secondary mr-lg-1 p-lg-1 pl-lg-2 pr-lg-2" key={genre.id}>{genre.name}</button>
                </Link>
            )
        })
    }

    const movieKeywords = () => {
        if (keywords?.length === 0) {
            return <p className="no-keywords">No keywords have been added</p>
        } else {
            return keywords?.map((keyword) => {
                return (
                    <Link
                        to={`/keyword/${keyword.name.replaceAll(' ', '+')}/${keyword.id}&page=1`}
                        key={keyword.id}>
                        <button className="keyword-btn btn btn-dark mr-lg-1 p-lg-1 pl-lg-2 pr-lg-2">
                            {keyword.name}
                        </button>
                    </Link>
                )
            })
        }
    }


    const videosDisplay = (vid) => {
        let video
        for (let i = 0; i < vid.length; i++) {
            if (vid[i].type === "Trailer" || vid[i].type === "Offical Trailer") {
                return (<iframe
                    className="vid col-md-12  d-flex justify-content-center"
                    width="560"
                    height="325"
                    src={`https://www.youtube.com/embed/${vid[i]?.key}`}
                    title={details.title || details.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>)
            }
        }
    }

    const { backdrops, logos, posters } = images

    return (
        <div
            //  d-flex flex-column justify-content-center
            className="details mt-3 w-md-100 mb-3 p-3 d-grid grid-column">
            <div className="cover p-3 row" >
                <img
                    className="cover-image"
                    src={IMG_BASE_URL + W500 + details.backdrop_path}
                    alt={details.title || details.name}
                />
                <div className="poster_img col-lg-3 col-md-4 col-12 d-flex align-items-center">
                    <img
                        className="poster col-12 m-0 p-0"
                        src={IMG_BASE_URL + ORIGINAL + details.poster_path}
                        alt={details.title || details.name} />
                </div>
                <div className="detail-container col-lg-9 col-md-8 col-12 text-light">
                    <h2 className="detail-name ">{details.title || details.name}</h2>
                    <p className="release_date">First air date: {details.release_date || details.first_air_date}</p>
                    <div className="detail-rating d-flex w-lg-20 w-sm-100">
                        <div className="vote">
                            <p className="h5 mr-5">Rate</p>
                            <p>{details.vote_average}</p>
                        </div>
                        <div className="runtime">
                            <p className="h5">Runtime</p>
                            <p>{details.runtime}</p>
                        </div>
                    </div>
                    <div className="overview text-light">
                        <p><strong>Overview</strong></p>
                        <p className="overview-data">
                            {details.overview}
                        </p>
                    </div>
                    <div className="genres m-0 mb-3 p-0 text-light">
                        {movieGenres()}
                    </div>
                    <div className="keywords m-0 p-0 text-light">
                        {movieKeywords()}
                    </div>
                </div>
            </div>
            <div className="side-media w-100">
                <p className="h4 text-light">Media</p>
                {videosDisplay(videos)}
            </div>
            <div className="list-data">
                <div className="detail-list cast mt-4">
                    <Link to={`/similar/${type}/${name}/${id}&page=1`}>
                        <p className="h4 text-light mb-4 text-capitalize">
                            <span> Cast </span>
                        </p>
                    </Link>
                    <SwiperEffectFade datas={casts} type={'person'} />
                </div>
                <div className="detail-list similar mt-4">
                    <Link to={`/similar/${type}/${name}/${id}&page=1`}>
                        <p className="h4 text-light mb-4 text-capitalize">
                            <span> Similar </span>
                        </p>
                    </Link>
                    <SwiperEffectFade datas={similar} type={type} />
                </div>
                <div className="detail-list recommend mt-4">
                    <Link to={`/recommend/${type}/${name}/${id}&page=1`}>
                        <p className="h4 text-light mb-4 text-capitalize">
                            <span> Recommend </span>
                        </p>
                    </Link>
                    <SwiperEffectFade datas={recommend} type={type} />
                </div>
            </div>
            {console.log(videos)}

        </div>
    )
}

export default Detail