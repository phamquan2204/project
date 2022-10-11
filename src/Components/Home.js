import React, { useEffect } from 'react'

import Trending from '../Modules/Trending.js'
import Banner from '../Modules/Banner.js'
import UpComing from '../Modules/UpComing.js'
import TopRated from '../Modules/TopRated.js';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [x => x + 1])



  return (
    <div className="m-0 row">
      <Banner />
      <div className="trending-container col-12 row">
        <TopRated type='movie' />
        <Trending mediaType='movie' name='trending movie' type='movie' />
        <Trending mediaType='tv' name='trending tv show' type='tv' />
        <Trending mediaType='person' name='popular people' type='person' />
      </div>
      <UpComing mediaType='movie' name='Upcoming Movie >>' />
    </div>
  )
}

export default Home