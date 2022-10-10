import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import img from '../Assets/Images/img.jpg'
import Card from '../Modules/Card.js'
import TrendingServices from '../Services/TrendingServices.js'
import { IMG_BASE_URL, W500 } from '../Services/Variables.js'
import { SwiperEffectFade } from './SwiperList.js'



function Trending(props) {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [timeWindow, setTimeWindow] = useState('day')
    const [mediaType, setMediaType] = useState('all')
    const [active, setActive] = useState(false)
    const times = ['day', 'week']
    // const media_types = ['movie', 'tv', 'all']


    const getTimeWindow = async (e) => {
        setTimeWindow(e.target.value)
        setActive(!active)
        if (active) {
            e.target.className = "btn btn-group btn-dark text-uppercase text-center"
        } else {
            e.target.className = "btn btn-group btn-secondary text-uppercase text-center"

        }
    }

    // const getMediaType = (e) => {
    //     setMediaType(e.target.value)
    // }

    useEffect(() => {
        const fetchData = async () => {
            await TrendingServices.getTrending(props.mediaType, timeWindow, 1)
                .then((res) => res.data)
                .then(data => setTrendingMovies(data.results))
                .catch(err => console.log(err))
        }
        fetchData()
    }, [mediaType, timeWindow]);

    return (
        <div className="col-12 mt-3 text-uppercase">
            <div className="lg-h4 sm-h5 d-flex align-items-baseline justify-content-left text-light text-uppercase text-left">
                <Link to={`/trending/${props.type}&page=1`}>
                    <p className="module-name mr-3 text-light">{props.name + ' >>'}</p>
                </Link>
                {times.map(time =>
                    <button
                        className={"btn btn-group btn-secondary text-uppercase text-center "}
                        value={time}
                        onClick={(e) => { getTimeWindow(e) }}> {time}</button>
                )}
            </div>
            <SwiperEffectFade datas={trendingMovies} />
        </div>
    );

}

export default Trending