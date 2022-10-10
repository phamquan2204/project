import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MoviesServices from '../Services/MoviesServices.js'
import { SwiperEffectFade } from '../Modules/SwiperList.js'


function UpComing(props) {

    const [upComingList, setUpComingList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let json = await MoviesServices.getUpcomingMovie(props.mediaType)
                .then(res => res.data)
                .then(data => setUpComingList(data.results))
            return json
        }
        fetchData();
    }, [props.mediaType]);

    return (
        <div className="col-12 mt-5 mb-3 text-uppercase">
            <div className="lg-h4 sm-h5 d-flex align-items-baseline justify-content-left text-light text-uppercase text-left">
                <Link to={'/upcoming&page=1'}>
                    <p className="mr-3 text-light">{props.name}</p>
                </Link>
            </div>
            <SwiperEffectFade datas={upComingList} type={props.mediaType} />
            {/* {console.log(upComingList)} */}
        </div>
    )
}

export default UpComing