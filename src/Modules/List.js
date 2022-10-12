import React from 'react'


import Card from '../Modules/Card.js';
import ButtonGroup from '../Modules/Button.js';

import img from '../Assets/Images/img.jpg';
import { ORIGINAL, IMG_BASE_URL } from '../Services/Variables.js';



function List(props) {

    const returnImg = (data) => {
        if (props.types === 'person') {
            return IMG_BASE_URL + ORIGINAL + data.profile_path
        } else {
            if (data.backdrop_path === null) {
                return IMG_BASE_URL + ORIGINAL + data.backdrop_path

            } else {
                return IMG_BASE_URL + ORIGINAL + data.poster_path
            }
        }
    }

    const newData = props.data.sort((a, b) => b.popularity - a.popularity)

    return (
        <div>
            <div className="search-results m-3">
                <p className="h4 text-light text-uppercase text-center"><strong>{props.title}</strong></p>
                <div className="data-container m-0 p-0 w-100 row align-items-center justify-content-space">
                    <div className="row align-items-center">
                        {
                            newData.map((movie) => {
                                return (
                                    <Card
                                        name={movie.title || movie.name}
                                        imgSrc={returnImg(movie)}
                                        id={movie.id}
                                        popularity={movie.popularity}
                                        types={props.types}
                                        vote_average={movie.vote_average || movie.popularity.toFixed(0)}
                                    />
                                )
                            })
                        }
                    </div>
                    <ButtonGroup
                        page={props.page}
                        link={props.link}
                    />
                </div>
                {console.log(newData)}
            </div>
        </div>
    )
}

export default List