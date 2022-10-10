import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MoviesServices from '../Services/MoviesServices.js';
import { SwiperEffectFade } from './SwiperList.js'


function TopRated(props) {

    const [topRated, setTopRated] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await MoviesServices.getTopRatedMovie(props.type)
                .then(res => res.data)
                .then(data => setTopRated(data.results))
        }
        fetchData()
    }, [props.type]);
    return (
        <div className="col-12 mt-lg-5 mb-lg-3 mt-2 mb-1 text-uppercase">
            <div className="lg-h4 sm-h5 d-flex align-items-baseline justify-content-left text-light text-uppercase text-left">
                <Link to={`/toprated/${props.type}&page=1`}>
                    <p className="module-name mr-3 text-light">{'Top rated >>'}</p>
                </Link>
            </div>
            <SwiperEffectFade datas={topRated} type={props.type} />
        </div>
    );

}

export default TopRated