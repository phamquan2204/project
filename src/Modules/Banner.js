import React, { useEffect, useState } from 'react'
import TrendingServices from '../Services/TrendingServices.js'

import { SwiperNavigation, FreeModeSwiper } from '../Modules/SwiperList.js'
import '../Assets/Styles/Banner.css'
function Banner() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    TrendingServices.getTrending('all', 'week', 1)
      .then((res) => res.data)
      .then(data => setTrendingMovies(data.results))
      .catch(err => console.log(err))

  }, []);
  return (
    <div className="banner-container">
      <div className="sidebar"></div>
      <SwiperNavigation datas={trendingMovies} />
      <div className="sidebar"></div>

    </div>
  )
}

export default Banner