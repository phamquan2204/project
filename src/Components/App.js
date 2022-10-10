import React, { useEffect } from 'react'

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import Footer from '../Modules/Footer.js';
import Header from '../Modules/Header.js';
import Home from './Home.js';

import SearchResults from './SearchResults.js';
import NotFound from './NotFound.js';
import UpComingList from './UpComingList.js';
import Detail from './Detail.js'
import PersonDetail from './PersonDetail.js'
import KeyWord from './KeyWord.js'
import Recommend from './Recommend.js'
import Discover from './Discover.js'
import TrendingList from './TrendingList.js'
import SimilarList from './SimilarList.js';
import Login from '../Modules/Login.js';

function App() {

  useEffect(() => {
    document.title = `The New Movie`
    window.scrollTo(0, 0)
  }, [x => x + 1]);


  return (
    <div className="bg-secondary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search&query=:query&page=:page" element={<SearchResults />}></Route>
          <Route path="/upcoming&page=:page" element={<UpComingList type='movie' />}></Route>
          <Route path='/trending/:type&page=:page' element={<TrendingList />}></Route>
          <Route path='/:type/:name/:id' element={<Detail />}></Route>
          <Route path='/person/:name/:id' element={<PersonDetail />}></Route>
          <Route path='/similar/:type/:name/:id&page=:page' element={<SimilarList />}></Route>
          <Route path='/keyword/:name/:id&page=:page' element={<KeyWord />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/:type/genre/:name/:id&page=:page' element={<Discover />}></Route>
          <Route path='recommend/:type/:name/:id&page=:page' element={<Recommend />} ></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
